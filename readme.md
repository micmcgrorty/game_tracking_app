# Game Tracking App

This is an app that allows users to search for games and then view information about those games. It communicates with the IGDB api via a backend server.

## Structure

Home page - shows a list of popular games and a list of recently released games
Search - allows a user to search for a game and then see a list of results
Game - shows information on a particular game and also a list of similar games

### Running locally

To run the app locally, you will need to run `npm install` and then `npm run start`. Note: you'll need to ensure any environment variables set in the `.env.example` are correctly set in a local `.env` file.

#### Related repo

The backend server repo can be found in my `game_tracking_api` repo.

##### Running example

A running example of this app, hosted on Netlify, can be found at `https://games.micmcgrorty.dev`
