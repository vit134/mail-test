import { expect, assert } from 'chai';
import sequence from '../src/utils/sequence';

const numbersArray = [1, 2, 3];
const handler = () => 1;

describe('Sequence', function() {
	const eventName = 'iteration';
	const thenable = sequence(numbersArray, handler);

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
	});

	describe('trigger', function () {
		it('should execute handlers of event', function () {
			let testValue;
			let testHandler = function () {
				testValue = 2;
			};

			thenable.on('test', testHandler);
			thenable.trigger('test', {});

			assert.equal(testValue, 2);
		});
	});
});