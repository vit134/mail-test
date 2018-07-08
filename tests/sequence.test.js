import { assert } from 'chai';
import sequence from '../src/utils/sequence';
import double from '../src/utils/double';

const numbersArray = [1, 2, 3];
const expected = [2, 4, 6];

const handler = double;

const eventName = 'iteration';
const thenable = sequence(numbersArray, handler);

describe('Sequence', function() {
	describe('on', function() {
		thenable.on(eventName, () => { });

		it(`should push "${eventName}" to listeners object`, function() {
			assert.property(thenable.listeners, eventName);			
		});

		it(`value of "${eventName}" should be array`, function () {
			assert.isArray(thenable.listeners[eventName]);
		});

		it(`values of "${eventName}" array should be a function`, function() {
			thenable.listeners[eventName].forEach(element => {
				assert.typeOf(element, 'function');	
			});
		});

		it('should return coorect event type', function() {
			thenable.on(eventName, function (event) {
				assert.equal(eventName, event.type);
			});
			
		});

		it('should return coorect value', function () {
			thenable.on(eventName, function (event, index, value) {
				assert.equal(value, expected[index]);
			});
		});
	});

	describe('then', function () {
		it('should return array', function () {
			thenable.then(function (values) {
				assert.isArray(values);
			});
		});

		it('should return correct values', function () {
			thenable.then(function (values) {
				assert.deepEqual(values,expected);
			});
		});

		it('should return callCount', function () {
			return thenable.then(function () {
				assert.equal(handler.callCount, numbersArray.length);
			});
		});
	});
});