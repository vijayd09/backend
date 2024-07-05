const dotenv = require('dotenv');
const connectDB = require('./db/index.js');
dotenv.config({
    path: './env'
})

connectDB();






// const express = require('express');
// const app = express();

// (async () => {
//     try {
//         await mongoose.connect('${process.env.MONGO_URI}/${DB_NAME}');

//         app.on("error", (err) =>{
//             console.log(err);
//             throw err;
//         });
//         app.listen(process.env.PORT,()=>{
//             console.loh('app listening on port / ${process.env.PORT}');
//         })
//     } catch (error) {
//         console.error("errrors:", error);
//         throw new Error;
//     }
// })