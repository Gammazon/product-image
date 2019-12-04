// const mongodb = require('mongodb');
// const mongoose = require('mongoose');
// const connectionString = require('./config');
// const uri = connectionString.connectionString;
// // const Product = require('./models/Product');

// mongoose.connect(`${uri}`, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: 'fec'
// })
// console.log("Connected!");
// let connection = mongoose.connection;
// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open', () => {
//     console.log('callback called!!!');
// });

// // created schema
// let ProductSchema = new mongoose.Schema({
//     id: { type: Number, unique: true },
//     product: String,
//     images: Array
// });

// // compile schema into a model (class with which we construct documents)
// let productModel = mongoose.model('productModel', ProductSchema, 'Products');

// const getAllProducts = () => {
//     return new Promise((resolve, reject) => {
//         productModel.find((error, result) => {
//             if (error) {
//                 reject("ERROR IN getAllProducts!", error);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// }
// console.log("made it!!")
// module.exports = { getAllProducts };