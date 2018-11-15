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

## Retro

Things I might have done differently:
- I'd clarify the client requirements more. What is the top priority?
What's the actual goal? What will happen to the code? Who will be taking it over? Who is actually
evaluating the prototype? Is backend important? Who created the project idea?
- Based on the clarified requirements, I might start with Firebase, if syncing was a priority.
It really depends how this is being evaluated. (As this is an interview, it's super difficult to differentiate goals...)
- I might be tempted to hack out the prototype using Vanilla JS, but from my experience, most prototype code gets
turned into "production" code... so I erred on the side of assuming that others will continue coding. (I'm reasonably
happy with the resulting codebase, although some things need some code cleanup.) Brett and I talked about Vanilla JS,
and while I'm a big proponent, it is geared for bottom-up design, which requires a couple people to be
working on the codebase continually (and someone to transition the handoff, if any). React+Redux is a top-down design.

Things I would add if I had time:
- Backend, for sure. Depending on the size (number of users), I'd either use Firebase or a custom API.
Firebase is great, but they trap you into their exponential pricing curve. :) Now that I think about it,
I might use RethinkDB to get the realtime updates (not sure how important that is).
- A simple admin or site configurator for customizing questions.
- Responsive Web Design. It's pretty close to being Responsive already, so this would be straightforward. There's
a couple of UI components that aren't easily scalable at the moment, e.g. the rating/scale component.

Estimated time for those features: 2–5 days.
