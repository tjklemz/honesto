# Honesto prototype

## Quickstart
```bash
yarn && yarn dev
```

## TODO
I've setup all the Redux actions so that hooking up an API should be straightforward.
Throughout the codebase, you'll find things labelled `@TODO` where that needs to be done.

## Default Data
You can find the "users" in `./src/actions/index.js` and the questions and feedback in the appropriate reducers
in `./src/reducers`. The "users" one is modeled the best (that is, how I'd actually handle it with an API).

## Routing
As much as possible, I've attempted to have everything be route based, using `react-router`.
This made it much simpler to create pages and components without having to keep track of everything.

## Redux
I've tried to model the Redux store after something you might find in MongoDB or Firebase. It
should also map well to a traditional SQL DB, since the data is fairly simple.
