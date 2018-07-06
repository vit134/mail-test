export default class MyPromise extends Promise {
	constructor(executor) {
		super((resolve, reject) => {
			return executor(resolve, reject);
		});

		this._listeners = {};
	}

	then(onFulfilled, onRejected) {
		const returnValue = super.then(onFulfilled, onRejected);
		return returnValue;
	}
	
	trigger(name, params) {
		let {index, value} = params;
		let _listeners = this._listeners[name];

		if (_listeners !== undefined) {
			var event = new Event(name);
			for (var key in _listeners) {
				_listeners[key](event, index, value);
			}
		}

		return this;
	}

	on(name, fn) {
		(this._listeners[name] = this._listeners[name] || []).push(fn);
		return this;
	}

	get listeners() {
		return this._listeners;
	}
}