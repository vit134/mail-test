/**
 * Асинхронно умножает число на 2.
 * @param {number} value
 * @returns {Promise}
 * @resolves {number}
 * @rejects {Error}
 */
export default function double(value) {
	double.callCount++;

	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve(value * 2);
		}, 500);
	});
}

/**
 * Счетчик вызовов функции double для тестов.
 * @type {number}
 */
double.callCount = 0;