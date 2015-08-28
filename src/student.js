'use strict';

var Person = require('./person');

function Student(id, name, age, klass) {
  Person.call(this, id, name, age);
  this.class = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.super_introduce = Person.prototype.introduce;

Student.prototype.introduce = function () {
  var studentString = 'at Class ';
  if(this.class.leader && this.class.leader.id === this.id) {
    studentString = 'Leader of Class '
  }
  return this.super_introduce() + ' I am a Student. I am ' + studentString + this.class.number + '.'
};

module.exports = Student;
