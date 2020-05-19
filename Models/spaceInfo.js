const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema for the space objects

//save data that is not unique to each user, so that multiple api calls do not need to be made..
//because darkest time of night, stars, moon-rise is all relative to location ==> request must be sent each time...
const SpaceInformationSchema = new Schema({
  date: String, //form YYYY-MM-DD
  //unique to year
  moon: {
    phase: Number,
    illuminationFraction: Number
  },
  //not unique to year (data limited)
  Mars: {
    //will have to scale to a day past 2012 because that is the earliest possible data
    images: [
      {
        url: String
      }
    ],
    weather: Number, //unsure if it works
    sunset: Number //unsure if it works
  },
  //unique to year
  apod: {
    url: String, // astronomy picture of the day
    explanation: String
  },
  //unique to year
  asteroids: {
    count: Number, //num
    hazardCount: Number, //amount of potentially hazardous asteroids
    //randomly get 3 asteroids ==> if there is a hazardous one use that for sure
    asteroidInfo: [
      {
        name: String,
        luminosity: Number,
        maxDiameter: Number, //in meters
        closestTime: String,
        velocityKM: Number,
        missDistanceKM: Number
      }
    ]
  },
  //not unique to year because events are rare!
  //these fields are unique to each users, in some cases interplanetery shocks never occured
  interplanetaryShock: {
    location: String,
    time: String
  },
  SolarFlare: {
    peakTime: String,
    class: String,
    location: String
  },

  GeomagenticStorm: {
    startTime: String,
    KpIndex: Number
  },

  CoronalMassEjection: {
    longitude: Number,
    latitidue: Number,
    speed: Number,
    Type: String //common, occasional,rare,extremely rare
  }
});

const SpaceInformation = mongoose.model("spaceInfo", SpaceInformationSchema);

module.exports = SpaceInformation; //export spaceInformation
