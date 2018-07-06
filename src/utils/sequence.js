import MyPromise from './MyPromise';

/**
 * Последовательно выполняет функцию handler для каждого элемента iterable.
 * @param {Array} iterable – массив исходных данных.
 * @param {Function} handler – возвращает обещание с вычисленным значением.
 * @returns {Thenable}
 * @resolves {Array}
 * @rejects {Error}
 */
export default (iterable, handler) => {
	let chain = MyPromise.resolve();
	let result = [];

	iterable.forEach(function(item, index) {
		chain = chain
			.then(() => handler(item))
			.then((value) => {
				chain.trigger('iteration', {index, value});
				result.push(value);
				return result;
			});
	});
	
	return chain;
};