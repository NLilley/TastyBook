var express = require('express');
var path = require('path');

var app = express();

app.use('/assets', express.static('./assets'));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8001);