'use strict';

var Person = require('./person');

function Worker(name, age) {
    Person.call(this, name, age);
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.introduce = function() {
    return 'I am a Worker. I have a job.';
};

module.exports = Worker;
