module.exports = {
	hostname: "localhost",
	port: "3081",
	webPath: __dirname,
	mockPath: __dirname,
	logLevel: "debug",
	/* proxies: {
        '/api': {
            host: 'api.examples.com',
        },
        '/userapi': {
            host: '127.0.0.1:7000',
            headers: {
                host: 'api.examples.com'
            }
        }
    },
    mocks: {
        '/api/item/list': 'testdata/test.json',
        '/api/item/1': function(req, res) {
            res.json({ code: 0, data: { id: 1, name: "javascript in action" } });
        },
        '/api/cart': {
            'get': 'testdata/test.json',
            'post': function(req, res) {
                res.send("add cart successful");
            }
        }
    } */
};