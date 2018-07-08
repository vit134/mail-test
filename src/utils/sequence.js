/**
 * Последовательно выполняет функцию handler для каждого элемента iterable.
 * @param {Array} iterable – массив исходных данных.
 * @param {Function} handler – возвращает обещание с вычисленным значением.
 * @returns {Thenable}
 * @resolves {Array}
 * @rejects {Error}
 */
export default function sequence(iterable, handler) {
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
			data.event = {type: event};

			for (var key in listeners) {
				listeners[key](data.event, data.index, data.value);
			}
		}
	};

	return MyPromise;
}