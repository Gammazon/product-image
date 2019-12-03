var mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kimandnickarecool",
    database: "gammazon"
});

con.connect(() => {
    console.log(`Connected to database!`);
});

module.exports = {};
