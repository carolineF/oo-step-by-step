'use strict';

var Person = require('./person');

function Teacher(id, name, age, classes) {
  Person.call(this, id, name, age);
  this.classes = classes;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.super_introduce = Person.prototype.introduce;

Teacher.prototype.introduce = function () {
  var classString = 'Class ' + this.classes.join(', ');

  if (this.classes.length <= 0) {
    classString = 'No Class';
  }
  return this.super_introduce() + ' I am a Teacher. I teach ' + classString + '.'
};

Teacher.prototype.introduceWith = function (student) {

  var teachString = "don't teach ";

  if (this.classes.indexOf(student.class.number) !== -1) {
    teachString = 'teach ';
  }

  return this.super_introduce() + " I am a Teacher. I " + teachString + student.name + '.'
};

Teacher.prototype.isTeaching = function(student) {
  return student.class.isIn(this.classes);
};

module.exports = Teacher;
