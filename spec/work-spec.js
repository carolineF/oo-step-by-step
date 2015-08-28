'use strict';

var Worker = require('../src/worker');
var Person = require('../src/person');

describe('Student', function() {

    it('should have name and age', function() {
        var worker = new Worker('Tom', 21);
        expect(worker.name).toBe('Tom');
        expect(worker.age).toBe(21);
    });

    it('should is a instance of Person', function() {
        var worker = new Worker('Tom', 21);
        expect(worker instanceof Person).toBeTruthy();
    });

    describe('#introduce()', function() {
        it('should return My name is Tom. I am 21 years old. I am a Worker. I have a job.', function() {
            var worker = new Worker("Tom", 21);
            expect(worker.introduce()).toBe('My name is Tom. I am 21 years old. I am a Worker. I have a job.');
        });
    });
});
