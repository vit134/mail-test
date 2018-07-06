/* eslint-disable  no-console */

/**
 * Последовательно выполняет функцию handler для каждого элемента iterable.
 * @param {Array} iterable – массив исходных данных.
 * @param {Function} handler – возвращает обещание с вычисленным значением.
 * @returns {Thenable}
 * @resolves {Array}
 * @rejects {Error}
 */
function sequence(iterable, handler) {
	class MyPromise extends Promise {
		constructor(resolve, reject) {
			super(resolve, reject);
			this.listeners = {};
			return this;
		}
		trigger(name, params) {
			let {index, value} = params;
			let listeners = this.listeners[name];

			if (listeners !== undefined) {
				var event = new Event(name);
				for (var key in listeners) {
					listeners[key](event, index, value);
				}
			}

			return this;
		}
		on(name, fn) {
			(this.listeners[name] = this.listeners[name] || []).push(fn);
			return this;
		}
	}

	let chain = MyPromise.resolve();
	let result = [];

	iterable.forEach(function(item, index) {
		chain = chain
			.then(() => handler(item))
			.then((value) => {
				chain.trigger("iteration", {index, value});
				result.push(value);
				return result;
			});
	});

	return chain;
}

/**
 * Асинхронно умножает число на 2.
 * @param {number} value
 * @returns {Promise}
 * @resolves {number}
 * @rejects {Error}
 */
function double(value) {
	double.callCount++;

	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve(value * 2);
		}, 100);
	});
}

/**
     * Счетчик вызовов функции double для тестов.
     * @type {number}
     */
double.callCount = 0;

var thenable = sequence([1,2,3], double);

thenable.on("iteration", function(event, index, value) {
	console.log(event.type === "iteration", "event.type === \"iteration\"");

	switch (index) {
	case 0:
		console.log(double.callCount === 1, "double.callCount === 1");
		console.log(value === 2, "value === 2");
		break;

	case 1:
		console.log(double.callCount === 2, "double.callCount === 2");
		console.log(value === 4, "value === 4");
		break;

	case 2:
		console.log(double.callCount === 3, "double.callCount === 3");
		console.log(value === 6, "value === 6");
		break;
	}
});

thenable.then(function(values) {
	console.log(values);
	console.log(values[0] === 2, "values[0] === 2");
	console.log(values[1] === 4, "values[1] === 4");
	console.log(values[2] === 6, "values[2] === 6");
	console.log(double.callCount === 3, "double.callCount === 3");
});

sequence([1, 2, 3], function() {
	throw new Error("test");
}).catch(function(reason) {
	console.error(reason instanceof Error, "reason instanceof Error");
});
