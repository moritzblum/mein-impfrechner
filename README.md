# mein-impfrechner

This GitHub Repository contains the source-code for the web 
application [mein-impfrechner.de](https://mein-impfrechner.de). 
Our calculator calculates you your vaccination possibilities, e.g. when you should get the next dose of which vaccine, based on your user input.
The website is hosted by GitHub Pages and all the data is processes inside your browser, no sensitive information will be sent to 
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

### Debugging on Mobile Devices
1. Find out the IP of your development machine: `ifconfig | grep "inet " | grep -v 127.0.0.1`
2. Disable Firewall: `sudo ufw disable`
3. Open Node default port: `sudo ufw allow 3000`


## Contributors 
* Technical Development: [Moritz Blum](https://github.com/moritzblum)
* Domain Expert: [Ole Wienke](https://github.com/OleWienke)
* Support: Marvin Bange(Figures)

In coopertaion with:

<img src="https://github.com/moritzblum/mein-impfrechner/blob/main/public/img/ASB-OWL-logo.png" width="150" height="100">



