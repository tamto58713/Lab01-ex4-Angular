const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/Lap01'));


app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/lap01/index.html'));
});

app.listen(process.env.PORT || 8080);