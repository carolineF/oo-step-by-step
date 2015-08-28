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
        it('should return I am a Worker. I have a job.', function() {
            var worker = new Worker("Tom", 21);
            expect(worker.introduce()).toBe('I am a Worker. I have a job.');
        });
    });
});
