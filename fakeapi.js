"use strict";
var log4js = require('log4js');
var logger = log4js.getLogger('fakeapi');

function fakePromise() {
    var greeting = null;
    var isSuccess = true;

    logger.debug('api called');

    var p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            logger.debug('api finished');
            if (isSuccess) {
                greeting = 'hello world';
                resolve(greeting);
            } else {
                reject('Something terrible happened !');
            }
        }, 3000);
    });

    return p;
}

module.exports = fakePromise;