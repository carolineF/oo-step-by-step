'use strict';

var Person = require('./person');

function Teacher(name, age, klass) {
  Person.call(this, name, age);
  this.class = klass;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.super_introduce = Person.prototype.introduce;

Teacher.prototype.introduce = function () {
  var classString = this.class;

  if (!this.class) {
    classString = 'No Class';
  }
  return this.super_introduce() + ' I am a Teacher. I teach ' + classString + '.'
};

Teacher.prototype.introduceWith = function (student) {

  var teachString = "don't teach ";

  if (student.class.number === parseInt(this.class.split(' ')[1])) {
    teachString = 'teach ';
  }

  return this.super_introduce() + " I am a Teacher. I " + teachString + student.name + '.'
};

module.exports = Teacher;
