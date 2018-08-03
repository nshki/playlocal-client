Play Local (Client)
===================

The client for a web app that enables gamers to discover local opponents.


# API

This app communicates directly with [this API app](https://github.com/nshki/playlocal-api).


# What is Play Local?

This project started with the announcement of Super Smash Bros. Ultimate for the
Nintendo Switch. The series as a whole places great emphasis on multiplayer
gameplay, and with the Switch, players will be able to play with others anywhere
in the world, offline or online.

Whether you're waiting for a couple hours at an airport or looking for opponents
on a college campus, the goal of Play Local is to provide an easy way for
players to find local opponents.

Play Local is a progressive web app and is not specifically for Super Smash
Bros.


# Roadmap

Features, bug fixes, and more are all tracked in [this project board](https://github.com/nshki/playlocal-client/projects/1).
Any API-related issues are tracked in the [API repo](https://github.com/nshki/playlocal-api).


# Technologies

- [create-react-app](https://github.com/facebook/create-react-app)
- [Redux](https://redux.js.org/)
- [React Apollo](https://github.com/apollographql/react-apollo)
- [react-map-gl](https://github.com/uber/react-map-gl)
- [styled-components](https://www.styled-components.com/)


# Getting Started

## Some prerequisites

1. [Setup the API app](https://github.com/nshki/playlocal-api).

2. [Install Yarn](https://yarnpkg.com/en/docs/install).

3. [Get a Mapbox access token](https://www.mapbox.com/help/how-access-tokens-work/) for local development.

## Okay, let's get rolling

1. Clone this repository and open the root directory:

        $ git clone git@github.com:nshki/playlocal-client.git
        $ cd playlocal-client

2. Create a new file called `.env.local` with the following content:

        REACT_APP_CLIENT_URL=http://localhost:3000
        REACT_APP_API_URL=http://localhost:3001
        REACT_APP_MAPBOX_ACCESS_TOKEN=<YOUR TOKEN HERE>

2. At the command prompt, install all dependencies:

        $ yarn install

3. Run tests and start the development server:

        $ yarn test
        $ yarn start


# Contributing

If you would like to contribute to Play Local, check out the [contribution guidelines here](https://github.com/nshki/playlocal-client/blob/master/CONTRIBUTING.md)!

## Discord Server

Want to chat with contributors directly? [Join the Discord server](https://discord.gg/bk8s4VT)!
