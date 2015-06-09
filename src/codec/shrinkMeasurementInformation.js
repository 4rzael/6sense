"use strict";

var moment = require('moment');

var MIN_DATE_UNIX_TIMESTAMP = require('./MIN_DATE_UNIX_TIMESTAMP');


var MIN_SIGNAL_STRENGTH = require('./MIN_SIGNAL_STRENGTH');
var MAX_SIGNAL_STRENGTH = MIN_SIGNAL_STRENGTH + 255;

function toByte(v){
    return v - MIN_SIGNAL_STRENGTH;
}

/*
    
*/
module.exports = function shrinkMeasurementInformation(measurement){
    var date = moment(measurement.date);
    var secondTimestamp = date.unix();
    var recentTimestampSec = secondTimestamp - MIN_DATE_UNIX_TIMESTAMP 
    
    var recentTimestampMin = Math.floor(recentTimestampSec/60);
    
    return {
        date: recentTimestampMin,
        signal_strengths: measurement.signal_strengths.map(toByte).sort(function(a, b){
            return a < b ? -1 : 1;
        })
    };
};
