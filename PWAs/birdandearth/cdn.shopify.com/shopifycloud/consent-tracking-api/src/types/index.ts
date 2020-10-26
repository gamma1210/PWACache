export enum TrackingEvents {
  TRACKING_LOADED = "trackingConsentLoaded",
  TRACKING_ACCEPTED = "trackingConsentAccepted",
  TRACKING_DECLINED = "trackingConsentDeclined",
  TRACKING_RESET = "trackingConsentReset",
}
export enum ConsentValues {
  ACCEPTED = "yes",
  DECLINED = "no",
  NO_INTERACTION = "no_interaction",
  NO_VALUE = "",
}

export enum TrackingRegulations {
  GDPR = "GDPR",
  CCPA = "CCPA",
  NO_VALUE = "",
}

export enum TrackingRegulationLimitations {
  CCPA_BLOCK_ALL = "CCPA_BLOCK_ALL",
  GDPR = "GDPR",
}

export type ConsentCookie = {
  consent: ConsentValues | boolean;
  regulation: TrackingRegulations;
  prefs: {
    limit: string[]
  }
};

export type ShopPrefs = {
  limit: string[];
}

export type ConsentAPIResponse = {
  userCanBeTracked: boolean | Error;
  userTrackingConsent: ConsentValues;
};
