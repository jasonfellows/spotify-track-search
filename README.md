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
```shell
sh setup.sh
```

## Tech

* [Next.js](https://nextjs.org/) framework for SSR, routing, build config
* TypeScript
* Ant Design

## Approach

### Authentication
This project's requirements don't require user-scoped Spotfy endpoints. However, all Spotify Web API endpoints now require authentication. I decided to go with the client credentials flow, which uses an app client ID and secret to request an access token.

To keep development time down, I decided to use `curl` to fetch an access token. This imposed an unfortunate limit on token validity of 1hr. This also put my initial plan to host the project on [Vercel](https://vercel.com/) using a serverless function for the track detail API call out of scope.

Given the time constraint, a shell script to fetch the token and write it to a local env var seemed to be the happiest path for running the project. Refreshing the token each search would introduce an additional request and negatively affect search UX. Introducing logic and global state to refresh the token only after expiration seemed a bit out of scope. I'd be happy to discuss production-ready approaches for implementing the other provided auth flows.

### UI
I enjoyed working with Ant Design for the first time! Starting a new product with an existing, documented design system is a great advantage. Some additional styling and some native elements were required to match the mockup.

### Thanks for your review :)


