/* eslint-disable  no-console */

/**
 * Последовательно выполняет функцию handler для каждого элемента iterable.
 * @param { Array } iterable – массив исходных данных.
 * @param { Function } handler – возвращает обещание с вычисленным значением.
 * @returns { Thenable }
 * @resolves { Array }
 * @rejects { Error }
 */
function sequence(iterable, handler) {
	var result = [];
	var MyPromise = Promise.resolve();

	iterable.forEach(function (item, index) {
		MyPromise = MyPromise
			.then(() => handler(item))
			.then((value) => {
				MyPromise.trigger('iteration', { index, value });
				result.push(value);
				return result;
			});
	});

	MyPromise.listeners = {};

	MyPromise.on = function (event, callback) {
		(MyPromise.listeners[event] = MyPromise.listeners[event] || []).push(callback);
	};

	MyPromise.trigger = function (event, data) {
		var listeners = MyPromise.listeners[event];

		if (listeners !== undefined) {
			data.event = { type: event };

			for (var key in listeners) {
				listeners[key](data.event, data.index, data.value);
			}
		}
	};

	return MyPromise;
}

/**
 * Асинхронно умножает число на 2.
 * @param {number} value
 * @returns {Promise}
 * @resolves {number}
 * @rejects {Error}
 */
export default function double(value) {
	double.callCount++;

	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve(value * 2);
		}, 500);
	});
}

/**
 * Счетчик вызовов функции double для тестов.
 * @type {number}
 */
double.callCount = 0;

var thenable = sequence([1, 2, 3], double);

thenable.on('iteration', function (event, index, value) {
	console.log(event.type === 'iteration', 'event.type === \'iteration\'');

	switch (index) {
	case 0:
		console.log(double.callCount === 1, 'double.callCount === 1');
		console.log(value === 2, 'value === 2');
		break;

	case 1:
		console.log(double.callCount === 2, 'double.callCount === 2');
		console.log(value === 4, 'value === 4');
		break;

	case 2:
		console.log(double.callCount === 3, 'double.callCount === 3');
		console.log(value === 6, 'value === 6');
		break;
	}
});

thenable.then(function (values) {
	console.log(values);
	console.log(values[0] === 2, 'values[0] === 2');
	console.log(values[1] === 4, 'values[1] === 4');
	console.log(values[2] === 6, 'values[2] === 6');
	console.log(double.callCount === 3, 'double.callCount === 3');
});

sequence([1, 2, 3], function () {
	throw new Error('test');
}).catch(function (reason) {
	console.error(reason instanceof Error, 'reason instanceof Error');
});
