# Spotify-Browser

A front end interface to browse through Spotify music using Angular to create a webpage and backend Express server to browe the music on spotify.

This application includes two directories:
- webserver which includes the Express/Node.js backend for communicating with the Spotify API
- client which includes the Angular frontend for browwsing music

There are six components in the components directory that control the data being presented to the interface:
1. about
2. carousel
3. carousel-card
4. search
5. track-list
6. thermometer

There are four components in the pages directory
1. album-page
2. artist-page
3. track-page
4. home-page

One service in the services directory
1. spotify-service

To run this you will need Node JS with a version of at least 10. For the client, you will need to install Angular through npm. To do this, you will install the Angular Command Line Interface (CLI) globally with "npm install -g @angular/cli". You will also need to install the dependencies for both the webserver and the client. These dependenceis are defined in each project's respective package.json files. Go into each respective project's folder and install the dependencies with "npm isntall".

You will need to log into Spotify using your credentials. Create a client_secret.json file located in the webserver folder, you will write in your consumer key and secret:
"{"
 "client_id": "Your Client Key",
 "client_secret": "Your Client Secret"
 "}"

You will also need to create a tokens.json file in the webserver directory. This file will later be overwritten once an access and refresh token have been retrieved. It should follow as:
"{"
 "access_token": null,
 "refresh_token": null
 "}"
 
 To run the Express webserver, go into the webserver folder and run "npm start". Be sure to have the dependencies installed first. To run the Angular client, go into the client folder and run "ng serve". Again, be sure to have the dependencies installed via "npm install".
