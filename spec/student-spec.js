'use strict';

var Student = require('../src/student');
var Class = require('../src/class');
var Person = require('../src/person');

describe('Student', function () {

  var student;

  beforeEach(function () {
    var klass = new Class(2);
    student = new Student("Tom", 21, klass);
  });

  it('should is a instance of Person', function () {
    expect(student instanceof Person).toBeTruthy();
  });

  it('should have name and age and class object', function () {
    expect(student.name).toBe('Tom');
    expect(student.age).toBe(21);
    expect(student.class).toEqual(new Class(2));
  });

  describe('#introduce()', function () {
    it('should return My name is Tom. I am 21 years old. I am a Student. I am at Class 2.', function () {
      expect(student.introduce()).toBe('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.');
    });
  });
});
