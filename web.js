var fs = require('fs');
var express = require('express');
var app = express();
app.configure(function () {
	app.use(
		"/", express.static(__dirname)
	);
});
app.listen(8080);
