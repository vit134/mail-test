var MyPromise = Promise.resolve();

MyPromise.listeners = {};

MyPromise.on = function (event, callback) {
	(MyPromise.listeners[event] = MyPromise.listeners[event] || []).push(callback);
};

MyPromise.trigger = function (event, data) {
	var listeners = MyPromise.listeners[event];

	if (listeners !== undefined) {
		data.event = new Event(event);

		for (var key in listeners) {
			listeners[key](data.event, data.index, data.value);
		}
	}
};

export default MyPromise;