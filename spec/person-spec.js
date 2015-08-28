'use strict';

var Person = require('../src/person');

describe('Person', function () {
  it('should have id and name and age', function () {
    var person = new Person(1, 'Tom', 21);
    expect(person.id).toBe(1);
    expect(person.name).toBe('Tom');
    expect(person.age).toBe(21);
  });

  describe('#introduce()', function () {
    it('should return My name is Tom. I am 21 years old.', function () {
      var person = new Person(1, "Tom", 21);
      expect(person.introduce()).toBe('My name is Tom. I am 21 years old.');
    });
  });
});
