'use strict';

var Teacher = require('../src/teacher');

describe('Student', function() {

    it('should have name and age and class', function() {
        var teacher = new Teacher('Tom', 21, 'Class 2');
        expect(teacher.name).toBe('Tom');
        expect(teacher.age).toBe(21);
        expect(teacher.class).toBe('Class 2');
    });

    describe('#introduce()', function() {
        it('should return My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.', function() {
            var teacher = new Teacher("Tom", 21, 'Class 2');
            expect(teacher.introduce()).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.');
        });

        it('class is null should return', function() {
            var teacher = new Teacher("Tom", 21);
            expect(teacher.introduce()).toBe(undefined);
        });
    });
});
