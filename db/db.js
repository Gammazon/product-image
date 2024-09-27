var mysql = require("mysql");
let config = require("./config");

// * for local
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: config.TOKEN.root,
//     database: "gammazon"
// });

// * for deploy
const con = mysql.createConnection({
    host: "gammazon.c9ljtzalkrkv.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: config.TOKEN.admin,
    port: 3306,
    database: "gammazon"
});
con.connect(() => {
    console.log(`Connected to database!`);
});

const getData = () => {
    return new Promise((resolve, reject) => {
        con.query(`SELECT * FROM products`,
            (error, result, field) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
    });
}

const getName = (id) => {
    return new Promise((resolve, reject) => {
        con.query(`SELECT productName FROM products WHERE id = ${id};`,
            (error, result, field) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
    });
}

module.exports = { getName, getData };
