# dnaviewer
Browser Based Viewer of DNA, implemented by LabsterX.

## Introduction
This repository implements a very simple single page application (SPA) that renders a diagram
and table given some JSON data about a piece of DNA. DNA sequences have particular subsegments that have a special
function. These are called DNA Features. The goal is to show a scientist the Dna Features in a particular DNA
molecule. One way of doing this is with a set of symbols called Synthetic Biology Open Language Visual (SBOL Visual).
Check it out here: http://www.sbolstandard.org/visual
A quick Google Search for "Plasmid Diagram" (plasmids are a type of circular DNA molecule) will show you many different
designs.

## Notes
To show DNA diagrams, this app uses AngularPlasmid (http://angularplasmid.vixis.com/), a third party JavaScript library that display DNA plasmids using AngularJS and SVG. This library only handles circular DNA. Therefore, this app is currenly limited to only showing circular DNA diagrams.

This app uses Gulp as the build system that automates tasks such as code minification, copying JS files and static images etc.

This web app was developed using a test-driven development (TDD) approach. The repository includes both unit-tests and E2E tests. For unit testing, I used Karma, Mocha, Chai and Sinon etc. For end-to-end (E2E) tests, I used Protractor, Mocha, Chai and Sinon etc.


Installtion
-----------

```sh
$ git clone <repo URL>
$ cd dnaviewer
$ npm install
```

Run the web app
---------------

```sh
$ gulp serve
```

You can then access the web app at http://localhost:3000/.

By default, it will launch a brower sync server on the source file (in the ".tmp" diretory). To launch a server on the optimized application (in the "dist" directory), run the following command instead:

```sh
$ gulp serve:dist
```

Run unit tests
--------------

```sh
$ gulp test
```

Run E2E tests
--------------

```sh
$ gulp test-e2e
```

Deployment
--------------

Deploy the contents in the "dist" directory to the production server.


