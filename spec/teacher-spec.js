'use strict';

var Teacher = require('../src/teacher');
var Student = require('../src/student');
var Class = require('../src/class');
var Person = require('../src/person');

describe('Student', function () {

  var teacher;

  beforeEach(function () {
    teacher = new Teacher(2, 'Tom', 21, [2,3]);
  });

  it('should is a instance of Person', function () {
    expect(teacher instanceof Person).toBeTruthy();
  });

  it('should have id and name and age and class', function () {
    expect(teacher.id).toBe(2);
    expect(teacher.name).toBe('Tom');
    expect(teacher.age).toBe(21);
    expect(teacher.classes).toEqual([2, 3]);
  });

  describe('#introduce()', function () {
    it('should return My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2, 3.', function () {
      expect(teacher.introduce()).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2, 3.');
    });

    it('when class is null should return My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.', function () {
      teacher = new Teacher(1, 'Tom', 21, []);
      expect(teacher.introduce()).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.');
    });
  });

  describe('#introduceWith()', function () {
    it("should return My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.", function () {
      var klass = new Class(1);
      var student = new Student(2, 'Jerry', 21, klass);

      expect(teacher.introduceWith(student)).toBe("My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.");
    });

    it("should return My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.", function () {
      var klass = new Class(2);
      var student = new Student(2, 'Jerry', 21, klass);

      expect(teacher.introduceWith(student)).toBe("My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.");
    });
  });
});
