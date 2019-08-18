var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names-cde', function () {
    describe('all', function() {
        it('should be an array of strings!', function() {
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                })
            }
        });

        it('should contain `Luke Skywalker`', function() {
            expect(starWars.all).to.include('Luke Skywalker');
        })
    });

    describe('random', function() {
        it('should return a random item from the starWars.all', function () {
            expect(starWars.all).to.include(starWars.random())
        });
        
        it('should return an array of random items if passed', function () {
            var randomItems = starWars.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function (item) {
                expect(starWars.all).to.include(item);
            });
        });
    });
});