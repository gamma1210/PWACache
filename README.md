# Green Lab - PWACache Replication package

## Introduction

This repository contains the replication package and dataset for the PWACache project of the Green Lab course in VU Amsterdam.

The project was conducted by:

- Abhirup Mukherjee (2667243)
a.mukherjee@student.vu.nl
- Gamma Andhika O. (2669061) 
g.a.o.octafarras@student.vu.nl
- Neeraj Sathyan (2660192) 
n.sathyan@student.vu.nl
- Prashanth Dommaraju (2688076) 
p.v.dommaraju@student.vu.nl
- Tavneet Singh (2668222) 
t.s.tavneet@student.vu.nl

The results of the experiment(Experiment Output) with the addition of the source of the PWAs, android runner automation files, R scripts (Data Analysis + visualization) and the caching strategy service worker codes used for the data analysis are included in this repository.

The PWAS used in this experiment are hosted on Github Pages, and can be accessed through (expect the site to be down in the long run as these pages are hosted temporarily, the source code is available in this repository):

- Football Peek - https://neerajsathyan.github.io/footballpeek/ 
- DEV Coffee - https://neerajsathyan.github.io/pwa-with-vanilla-js/ 
- Wavepad - https://neerajsathyan.github.io/wavepad/ 
- Resilient Web Design - https://neerajsathyan.github.io/resilientwebdesign/
- Beer - https://gamma1210.github.io/beer/ 
- Currency Calc - https://gamma1210.github.io/currency-calc/
- Jetze - https://gamma1210.github.io/jetzt/www.jetzt.de/
- BirdAndEarth - https://gamma1210.github.io/birdandearth/www.birdandearth.com.au/ 
- La Cuenta - https://neerajsathyan.github.io/la-cuenta/ 

The source of the PWAs are also available under the PWAs folder.

## Overview of the replication package

This replication package is structured as follows:
```
PWACACHE
    .
    |--- android-runner/            Android-runner framework to execute experiments.
    |
    |--- Service Workers/           Service worker codes split into the four caching strategies for all the 9 PWAs.
    |
    |--- Data Analysis + visualization/ R scripts and the corresponding plots of data analysis.
    |
    |--- PWAs/                      The extracted PWAs downloaded via a WebSite Downloader.
    |
    |--- Experiment Output/         Data from all the 4 strategy wise experiments as 4 different folders with each folder having specific app related csv files and one consolidated csv file for the corresponding strategy.
    |
    |--- server/            	    Sniffing Server to get network related traffic from the chrome browser in mobile. (In order to do sniffing, apart from setting up an HTTPS server hosted on the internet, the scripts written before the footer element of all PWA index.html needs to be uncommented.)
    |
```

## Running the experiment
Follow the instructions in android-runner folder and make the necessary configuration changes based on mobile and experimental setup. The experimental configuration can be taken from the output folder of `batterystats`(only runs battery stats plugin) or from the folder `android` in the example folders of the plugin.
Refer https://github.com/S2-group/android-runner