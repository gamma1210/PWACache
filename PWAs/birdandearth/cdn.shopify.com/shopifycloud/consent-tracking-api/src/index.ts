import {
  TrackingEvents,
  ConsentCookie,
  ConsentValues,
  TrackingRegulations,
  TrackingRegulationLimitations,
  ShopPrefs,
} from "./types";

export const CONSENT_COOKIE_NAME = "_tracking_consent";

function readCookie(): ConsentCookie | undefined {
  const cookies = document.cookie ? document.cookie.split("; ") : [];
  let result = undefined;
  cookies.forEach((cookie) => {
    const [name, value] = cookie.split("=");

    if (CONSENT_COOKIE_NAME === decodeURIComponent(name)) {
      var cookieObj = JSON.parse(decodeURIComponent(value));

      result = cookieObj;
    }
  });

  return result;
}

/**
 * Update buyer tracking consent in the _tracking_consent cookie.
 *
 * @param {boolean} data The buyer's consent data.
 * @param {function} callback The result from the API call.
 */
function updateTrackingConsent(
  data: { consent: boolean },
  callback: (err: null | {}, success?: {}) => {},
  customEvent: TrackingEvents | undefined = undefined
) {
  const xhr = new XMLHttpRequest();

  const url =
    "https://" + document.location.host + "/set_tracking_consent.json";
  const body = JSON.stringify(data);

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  function handleReadyStateChange() {
    // XMLHttpRequest.DONE === 4
    if (xhr.readyState !== 4) {
      return;
    }

    const statusOk =
      xhr.status === 0 || (200 >= xhr.status && xhr.status < 400);
    let responseJson;

    try {
      responseJson = JSON.parse(xhr.responseText);
    } catch (err) {
      responseJson = {
        error: "Unknown error",
      };
    }

    if (statusOk) {
      if (customEvent) {
        document.dispatchEvent(
          new CustomEvent(customEvent, {
            detail: {},
          })
        );
      }
      callback(null, responseJson);
    } else {
      callback(responseJson);
    }
  }

  xhr.onreadystatechange = handleReadyStateChange;
  xhr.send(body);
}

function setTrackingConsent(consent: boolean, callback: () => {}) {
  if (consent == undefined || !(typeof consent === 'boolean')) {
    throw TypeError('setTrackingConsent must be called with a boolean consent value');
  }
  if (callback == undefined || !(typeof callback === 'function')) {
    throw TypeError('setTrackingConsent must be called with a callback function');
  }
  if (consent === true) {
    return updateTrackingConsent(
      { consent: true },
      callback,
      TrackingEvents.TRACKING_ACCEPTED
    );
  }
  return updateTrackingConsent(
    { consent: false },
    callback,
    TrackingEvents.TRACKING_DECLINED
  );
}

function getTrackingConsentValue(consentValue: ConsentValues): ConsentValues {
  if (consentValue === ConsentValues.NO_VALUE) {
    return ConsentValues.NO_INTERACTION;
  }
  return consentValue;
}

function getTrackingConsent(): ConsentValues | boolean {
  try {
    const cookieValue = readCookie();

    if (
      (cookieValue && cookieValue.consent === ConsentValues.ACCEPTED) ||
      (cookieValue && cookieValue.consent === ConsentValues.DECLINED) ||
      (cookieValue && cookieValue.consent === ConsentValues.NO_VALUE)
    ) {
      return getTrackingConsentValue(cookieValue.consent);
    } else {
      return ConsentValues.NO_VALUE;
    }
  } catch (err) {
    new Error(err);
    return false;
  }
}

function isRegulationEnforced(): boolean {
  try {
    const cookieValue = readCookie();
    const limitedRegulation = cookieValue?.regulation === TrackingRegulations.CCPA ?
      TrackingRegulationLimitations.CCPA_BLOCK_ALL :
      cookieValue.regulation;
    return Boolean(
      cookieValue?.prefs?.limit.includes(limitedRegulation));
  } catch (err) {
    new Error(err);
    return false;
  }
}

function getShopPrefs(): ShopPrefs | boolean {
  try {
    const cookieValue = readCookie();
    return cookieValue?.prefs;
  } catch (err) {
    new Error(err);
    return false;
  }
}

function hasConsentForTrackingRegulation(): boolean {

  const cookieValue = readCookie();
  const regulation = getRegulation().toUpperCase();

  switch (regulation) {
    case TrackingRegulations.NO_VALUE:
      return cookieValue.consent !== ConsentValues.DECLINED ? true : false;
    case TrackingRegulations.GDPR:
      return cookieValue.consent === ConsentValues.DECLINED ||
        cookieValue.consent === ConsentValues.NO_VALUE ? false : true;
    default:
      return true;
  }
}

function userCanBeTracked(): boolean {
  try {
    const cookieValue = readCookie();

    if (
      !cookieValue || (
        cookieValue &&
        cookieValue.consent === ConsentValues.ACCEPTED
      ) || hasConsentForTrackingRegulation()
    ) {
      return true;
    }
    return false;
  } catch (err) {
    new Error(err);
    return false;
  }
}

function userDataCanBeSold(): boolean {
  try {
    const cookieValue = readCookie();

    if (!cookieValue || hasConsentForDataExportRegulation()) {
      return true;
    }
    return false;
  } catch (err) {
    new Error(err);
    return false;
  }
}


function hasConsentForDataExportRegulation(): boolean {
  const regulation = getRegulation().toUpperCase();

  switch (regulation) {
    case TrackingRegulations.CCPA:
      return !isRegulationEnforced();
    default:
      return true;
  }
}

function getRegulation(): string {
  const cookieValue = readCookie();
  if (cookieValue && cookieValue.regulation) {
    switch (cookieValue.regulation.toUpperCase()) {
      case TrackingRegulations.GDPR:
        return TrackingRegulations.GDPR;
      case TrackingRegulations.CCPA:
        return TrackingRegulations.CCPA;
      default:
        return "";
    }
  }

  return "";
}

function shouldShowGDPRBanner(): boolean {
  return (
    getRegulation() === TrackingRegulations.GDPR &&
    isRegulationEnforced() &&
    getTrackingConsent() === ConsentValues.NO_INTERACTION
  )
}

export function shopifyConsentAPI() {
  return {
    getTrackingConsent,
    setTrackingConsent,
    userCanBeTracked,
    getRegulation,
    isRegulationEnforced,
    getShopPrefs,
    shouldShowGDPRBanner,
    userDataCanBeSold,
  };
}

declare global {
  interface Window {
    Shopify: {
      trackingConsent?: {};
      customerPrivacy?: {};
    };
  }
}
window.Shopify = window.Shopify ? window.Shopify : {};
// We are sunsetting the trackingConsent namespace in favor of the customerPrivacy namespace
window.Shopify.customerPrivacy = window.Shopify.trackingConsent = shopifyConsentAPI();
