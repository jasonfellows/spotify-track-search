# Spotify Track Search

## Project Setup

Package dependencies:
* Python 3
* Node.js v10.13 or higher
* [yarn](https://yarnpkg.com/) (optional, recommended)

This project requires authentication with the Spotify API. Begin by logging into Spotify and creating a new app from the [Developer Dashboard](https://developer.spotify.com/dashboard/applications). Choose whatever name and description for the app you wish.

Once you've created your app, you can view the app's Client ID and Client Secret. You will need these for the next step.

A script to install project dependencies, get a Spotify access token, and start your development server has been provided. 
The access token will expire after one hour. After that, you will need to run the setup script again.

Open a terminal and run:
shell```
sh setup.sh
```
