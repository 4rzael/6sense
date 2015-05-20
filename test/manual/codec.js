"use strict";

var encodeForSMS = require('../../js/codec/encodeForSMS');
var decodeForSMS = require('../../js/codec/decodeFromSMS');

var measurements = [
    {
        date: new Date('2015-05-15T14:38:00+02:00'),
        signal_strengths: [-60, -63, -75, -40, -64, -70, -66, -82, -70, -80, -91, -73, -23, -83, -73, -76, -74, -72, -70, -68, -66, -67, -67, -65, -65, -63, -55, -57, -61, -48, -53, -54, -48, -45, -36, -40, -41]
    },
    {
        date: new Date('2015-05-15T14:39:00+02:00'),
        signal_strengths: [-60,-63,-75,-40,-64,-70,-82,-66,-82,-70,-80,-91,-73,-
23,-83,-73,-76,-74,-72,-70,-68,-66,-67,-67,-65,-65,-63,-55,-57,-61,-48,-53,-54,-
48,-45,-36,-40,-41]
    },
    {
        date: new Date('2015-05-15T14:40:00+02:00'),
        signal_strengths: [-60,-63,-75,-40,-64,-70,-82,-66,-82,-70,-80,-91,-73,-
23,-83,-73,-76,-74,-72,-70,-68,-66,-67,-67,-65,-65,-63,-55,-57,-61,-48,-53,-54,-
48,-45,-36,-40,-41]
    },
    {
        date: new Date('2015-05-15T14:41:00+02:00'),
        signal_strengths: [-60,-63,-75,-40,-64,-70,-82,-72,-70,-80,-91,-73,-23,-
83,-73,-76,-74,-72,-70,-68,-66,-67,-67,-65,-65,-63,-55,-57,-61,-48,-53,-54,-48,-
45,-36,-40,-41]
    },
    {
        date: new Date('2015-05-15T14:42:00+02:00'),
        signal_strengths: [-60,-63,-75,-40,-64,-70,-91,-73,-23,-83,-73,-76,-74,-
72,-70,-68,-66,-67,-67,-65,-65,-63,-55,-57,-61,-48,-53,-54,-48,-45,-36,-40,-41]
    }
];

encodeForSMS(measurements)
	.then(decodeForSMS)
	.then(function(res){
		console.log('encode + decode', res);

	})
	.catch(function(err){
		console.error('encode + decode err', err);
	})