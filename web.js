var express = require('express');

var app = express.createServer(express.logger());

app.configure(function(){
    console.log(__dirname);
    app.use("/public", express.static(__dirname + "/public"));
    app.use(express.methodOverride());
    app.use(app.router);
});

app.get('/', function(request, response) {
    // response.send('Hello World!');
    response.sendfile("index.html");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
