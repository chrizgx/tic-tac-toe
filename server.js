// Install Express Server for Heroku Deployment
const express = require('express');

const app = express();
// Serve static files from dist directory

app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
})

app.listen(process.env.PORT || 8080, function() {
    console.log('Serving Angular SPA from "dist" folder.')
});