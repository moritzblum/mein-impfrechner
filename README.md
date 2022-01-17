# mein-impfrechner

This GitHub Repository contains the source-code for the web 
application [mein-impfrechner.de](https://mein-impfrechner.de). 
Our calculator give you your vaccination possibilities, e.g. when you should get the next dose of which vaccine.
The website is hosted by GitHub Pages and all the data is processes inside the browser, no information will be sent to 
us. 

The application is based on [ReactJS](https://reactjs.org/), a JavaScript library for building user interface, and build 
by the React npm package for deployment.

## Development and Deployment

The mein-impfrechner GitHub repository has two  continuous branches: `main` and `gp-pages`: The `main` branch contains 
the source-code of the project, whereas `gp-pages` contains the currently deployed website (already build). 
For contribution, follow the following steps:

1. download and install [https://nodejs.org/en/](node.js)
2. clone this repository and navigate into it: `cd mein-impfrechner`
3. install all dependencies: `npm install` (this will set up the project according to package.json)
4. we use Jest for Unit-Tests, simply call `npm test` to run them.

Now you are ready for development. If you want to deploy the current version, run `npm run deploy` inside the project 
directory (on the `master` branch).



## Files
* [index.html](public/index.html) - HTML root: main page
* [render_form.js](src/form_logic.js) - Frontend: displays questions and results 
* [form_logic.js](src/form_logic.js) - Backend: chooses which question to ask next and computes the output

## Contributors 
* Technical Development: [Moritz Blum](https://github.com/moritzblum)
* Domain Expert: [Ole Wienke](https://github.com/OleWienke)

Support: Marvin Bange(Figures)

In Kooperation mit:

<img src=".https://github.com/moritzblum/mein-impfrechner/tree/main/public/img/ASB-OWL-Logo.png" width="100" height="100">