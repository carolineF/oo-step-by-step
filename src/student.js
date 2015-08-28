'use strict';

var Person = require('./person');

function Student(name, age, klass) {
  Person.call(this, name, age);
  this.class = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function() {
  return 'I am a Student. I am at ' + this.class + '.'
}

module.exports = Student;
