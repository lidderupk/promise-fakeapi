var api = require('./fakeapi');
var log4js = require('log4js');
var logger = log4js.getLogger('app');

logger.debug('start program');

logger.debug('call api');

api().then(function(data) {
    logger.debug('promise resolved');
}).catch(function(err) {
    logger.error(err);
});

var d = new Date();
logger.debug("end program");