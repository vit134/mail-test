/* eslint-disable no-console */

import sequence from './utils/sequence';
import double from './utils/double';

var thenable = sequence([1,2,3], double);

thenable.on('iteration', function(event, index, value) {
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

thenable.then(function(values) {
	console.log(values);
	console.log(values[0] === 2, 'values[0] === 2');
	console.log(values[1] === 4, 'values[1] === 4');
	console.log(values[2] === 6, 'values[2] === 6');
	console.log(double.callCount === 3, 'double.callCount === 3');
});

sequence([1, 2, 3], function() {
	throw new Error('test');
}).catch(function(reason) {
	console.error(reason instanceof Error, 'reason instanceof Error');
});
