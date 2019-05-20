import React from 'react'

var BETWEEN_DEGREE = 15;
var THOUSAND_METER = 1000;

/**
 * define surface distance per 1 degree change
 */
var SURFACE_DISTANCE_PER_ONE_DEGREE = [
   { latitude : 110.574, longitude : 111.320 }, //0  degree
   { latitude : 110.649, longitude : 107.551 }, //15 degree
   { latitude : 110.852, longitude : 96.486 },  //30 degree
   { latitude : 111.132, longitude : 78.847 },  //45 degree
   { latitude : 111.412, longitude : 55.800 },  //60 degree  
   { latitude : 111.618, longitude : 28.902 },  //75 degree
   { latitude : 111.694, longitude : 0.000 }    //90 degree
];

/**
 * define class GPS for keep latitude and longitude
 */
export var GPS = function(lat, lnt){
   this.latitude = lat || 0;
   this.longitude = lnt || 0;
}; 

function getSurfaceDistance(gps){
    return SURFACE_DISTANCE_PER_ONE_DEGREE[parseInt(gps.latitude / BETWEEN_DEGREE)]; //depend on latitude
}

function getLatitudeDistance(gps){
   return getSurfaceDistance(gps).latitude * THOUSAND_METER;
}

function getLongitudeDistance(gps){
   return getSurfaceDistance(gps).longitude * THOUSAND_METER;
}
 
export function findDistance(gps1, gps2){

   var latitudeDistance1 = getLatitudeDistance(gps1); //a1
   var latitudeDistance2 = getLatitudeDistance(gps2); //a2
 
   var longitudeDistance1 = getLongitudeDistance(gps1); //b1
   var longitudeDistance2 = getLongitudeDistance(gps2); //b2
 
   // (X2 * a2 - X1 * a1) ^ 2
   var power1 = Math.pow((gps2.latitude * latitudeDistance2) - (gps1.latitude * latitudeDistance1), 2);
   // (Y2 * b2 - Y1 * b1) ^ 2
   var power2 = Math.pow((gps2.longitude * longitudeDistance2) - (gps1.longitude * longitudeDistance1), 2);

   return Math.sqrt(power1 + power2);
};

/**
 * define gps1 and gps2 location
 */
var gps1 = new GPS(13.7569991624617, 100.6180630694732);
var gps2 = new GPS(13.7569991624617, 100.6189613806482);

var a2 =100.6180630694732
var b2 = 100.6189613806482
var a1 =13.7579035341947
var b1 = 13.7569991624617
var c1 = 0.0009043717330001755  //100 meter
var c2 = 0.0008983111750069384 //100 meter
// console.log(b2-a2)
// console.log(findDistance(gps1, gps2) + ' meter')
