# ngPoseidon
ngPoseidon is a lightweight Angular(2+) admin tool, built with Angular-Cli and Angular-Material, using JWT for auth.

## Project status
This project is still in alpha, but I am nearing a production build internally.

## Goals for the future
There are still a lot of things to do for this app to reach a production and community-ready status. 

Things to do for the immediate future:
  1. Writing tests
  2. Add more support for more form types
    a. Multi-select autocomplete
    b. Images
    c. Dynamic autocomplete for json api's
  3. Refactor dynamic forms to be smaller and easier to use.
    a. Make a dynamic form component for autocomplete inputs
    b. Look into initializing the form builder component at render of the main component instead of on init of dialog component
  4. See how fessible it is to generate multiple pages through json instead of a new component for each page
  5. Refactor the project folder structure to make it easier to use
  6. Concept designs for a front page dashboard (chart.js is supported and installed on the home page)
  7. Documentation
  8. Improved/consistent styling 
  9. Reduce bundle size
  10. Improve performance
  
*New ideas are more than welcome

More info and things to do coming

# How to start

## Install 

Once you have cloned the repo and made sure you have npm installed (https://docs.npmjs.com/cli/install)

Run `npm install`

It will do it's thing and then run `ng serve`

## Customize

To modify for you own project change the article/group/user component or generate a new component using the `ng generate component *component-name*`

Then copy/modify your component to your needs (docs coming)

Files to modify:
`src/app/app.module.ts   for new components`
`src/app/routes.ts   for new routes`
`src/app/services/api.service.ts   for your api routes`
`src/app/services/login.service.ts   for your auth routes`

If you want to change the theme of the app modify:

`src/theme.scss`

The theming engine for the app is using the material design themes. More info can be found here: https://material.angular.io/guide/theming

# Angular-cli help

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
