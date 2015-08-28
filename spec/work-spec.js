'use strict';

var Worker = require('../src/worker');
var Person = require('../src/person');

describe('Student', function () {

  var worker;
  beforeEach(function () {
    worker = new Worker(2, 'Tom', 21);
  });

  it('should have id and name and age', function () {
    expect(worker.id).toBe(2);
    expect(worker.name).toBe('Tom');
    expect(worker.age).toBe(21);
  });

  it('should is a instance of Person', function () {
    expect(worker instanceof Person).toBeTruthy();
  });

  describe('#introduce()', function () {
    it('should return My name is Tom. I am 21 years old. I am a Worker. I have a job.', function () {
      expect(worker.introduce()).toBe('My name is Tom. I am 21 years old. I am a Worker. I have a job.');
    });
  });
});
