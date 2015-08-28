'use strict';

var Student = require('../src/student');
var Class = require('../src/class');
var Person = require('../src/person');

describe('Student', function () {

  var student;
  var klass;

  beforeEach(function () {
    klass = new Class(2);
    student = new Student(2, "Tom", 21, klass);
  });

  it('should is a instance of Person', function () {
    expect(student instanceof Person).toBeTruthy();
  });

  it('should have id and name and age and class object', function () {
    expect(student.id).toBe(2);
    expect(student.name).toBe('Tom');
    expect(student.age).toBe(21);
    expect(student.class).toEqual(new Class(2));
  });

  describe('#introduce()', function () {
    it('should return My name is Tom. I am 21 years old. I am a Student. I am at Class 2.', function () {
      expect(student.introduce()).toBe('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.');
    });

    it('should return My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.', function(){
      klass.assignLeader(student);
      expect(student.introduce()).toBe('My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.');
    });
  });
});
