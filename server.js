//Install express server
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const port = http.createServer(process.env.PORT || 3000);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ERP-Lawyers-Associates-s-Heroku'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/src/index.html'));
});

// Start the app by listening on the default Heroku port
app.set("port", port);