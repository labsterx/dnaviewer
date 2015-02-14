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

This web app is developed using a test-driven development (TDD) approach. The repository includes both unit-tests and E2E tests. For unit testing, I used Karma, Mocha, Chai and Sinon etc. For end-to-end (E2E) tests, I used Protractor, Mocha, Chai and Sinon etc.


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
You can then access the web app at http://localhost:3000/

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



