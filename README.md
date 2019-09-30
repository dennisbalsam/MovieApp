# CinemaGuru

Author: Dennis Krupitsky

This is a project utilizing the OMDBApi ( a RESTful web service to obtain movie information), to create a small interface 
where the user can either view details about the pre-selected movie options, or do a search for details about the movie of their choice. 

## Time spent
Describe the time you spent on the project.
 * Tutorials, research: 3 hours
 * Coding required stories: 6 hours
 * Optional and extras: 30 minutes

## User stories

### Required
 * [x] User can search for movies. 
 * [x] On page load, user can see 3-5 pre-selected movies.
 * [x] User can click on movie to see a detail page with more information (e.g. ratings, descriptions, author)

### Optional

 * [x] Fade in the poster images
 * [ ] Have a toggle which switches the search layout between a "grid" view and a "table" style view
 * [ ] Have an error message if the API fails to load.
 * [x] Show a loading state when fetching for a movie
 * [ ] Have a pagination mechanism that allows the user to see more results. Show the total number of results.
 * [ ] Add a light/dark color theme toggle on the page
 * [ ] Page is optimized for the viewport/browser size (i.e. scales to mobile & desktop sizes)


## GIF Walkthrough


![Walkthrough GIF](https://media.giphy.com/media/lowDB5iWzqXMcHvEqO/giphy.gif)

## Notes & shoutouts

This was a very fun project to create, especially since it is the first time I utilized ember js along with API connectivity. I learned how a adapter, and serializer works in order to format the api call and response. The design of this project is mostly custom CSS, except for the use of bootstrap for basic positioning. Shoutout to shane for providing the data example to show multiple approaches for manipulating the data response. I really like this project as you can search for any movie and see details about it just like the imdb website itself.

--------------------------------------------------------------------------------------------------------------------




# movie-app

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd movie-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
