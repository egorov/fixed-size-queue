var Queue = require('./src/Queue');

exports.create = function(capacity){
    return new Queue(capacity);
};
