const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
const db = require('../db/db');

app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get("/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/styles.css"));
});

app.post("/data", (req, res) => {
    return db.getData()
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            res.send(error);
        })
});

const port = 5000;
app.listen(port, () => {
    `Listening on port ${port}`;
});
