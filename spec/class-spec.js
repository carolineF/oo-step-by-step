'use strict';

var Class = require('../src/class');
var Student = require('../src/student');

describe('Class', function () {
  it('should have number', function () {
    var klass = new Class(1);
    expect(klass.number).toBe(1);
  });

  describe('#assignLeader()', function () {
    it('should set student as class.leader', function() {
      var klass = new Class(2);
      var student = new Student(2, 'Tom', 21, klass);
      klass.assignLeader(student);
      expect(klass.leader).toBe(student);
    });

    it('should return It is not one of us.', function() {
      var klass = new Class(1);
      var student = new Student(2, 'Tom', 21);
      expect(klass.assignLeader(student)).toBe('It is not one of us.');
    });
  });

  describe('#appendMember()', function() {
    it('should get student class is 2', function() {
      var klass = new Class(2);
      var student = new Student(2, 'Tom', 21);
      klass.appendMember(student);
      expect(student.class).toBe(klass);
    });
  });
});
