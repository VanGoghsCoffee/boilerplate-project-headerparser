const express = require('express');
const app = express();

const returnObj = (ipaddress, language, software) => ({ ipaddress, language, software });

app.get("/api/whoami", (req, res) => {
    const headers = req.headers;
    res.json(returnObj(req.ip, headers['accept-language'], headers['user-agent']));
});

module.exports = app;