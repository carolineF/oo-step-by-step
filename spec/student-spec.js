'use strict';

var Student = require('../src/student');

describe('Student', function() {

  it('should have name and age and class', function() {
      var student = new Student('Tom', 21, 'Class 2');
      expect(student.name).toBe('Tom');
      expect(student.age).toBe(21);
      expect(student.class).toBe('Class 2');
    });

    describe('#introduce()', function() {
      it('should return My name is Tom. I am 21 years old. I am a Student. I am at Class 2.', function() {
        var student = new Student("Tom", 21, 'Class 2');
        expect(student.introduce()).toBe('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.');
      });
    });
});
