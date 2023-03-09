const path = require("path");
const express = require("express");
const http = require("http");

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT;
app.set("port", port);

// Create HTTP server.
http.createServer(app).listen(port, '0.0.0.0', () => {
    console.log(`API running on localhost:${port}`);
});