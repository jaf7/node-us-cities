# node-us-cities
node-us-cities is a simple helper for retrieving US states with their respective cities. Inspired by [node-canada](https://github.com/jprichardson/node-canada) package by @jprichardson. Data set is from [US-states-and-cities-json](https://github.com/cschoi3/US-states-and-cities-json) by @cschoi3

## Installation
`npm install --save node-us-cities`

## Usage
```
var us = require('node-us-cities');

// all data includes state / abbreviation / cities
var data = us.getAllData();
// Ex: Pennsylvania
var single = us.getDataByState('PA); // or us.getDataByState('Pennsylvania');

// Implementation ..
```


## Development

Pull requests are very much welcome - let me know if there are wrong info especially on the *cities* data set. Just clone this repository and off you go. Thanks!

## Credits

Credits to [https://github.com/cschoi3](cschoi) for the awesome data set.
