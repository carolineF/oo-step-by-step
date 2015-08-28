'use strict';

var Person = require('./person');

function Student(name, age, klass) {
  Person.call(this, name, age);
  this.class = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.super_introduce = Person.prototype.introduce;

Student.prototype.introduce = function() {
  return this.super_introduce() + ' I am a Student. I am at Class ' + this.class.number + '.'
};

module.exports = Student;
