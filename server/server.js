
// import express from 'express';
// import cors from 'cors';
// import morgan from 'morgan';
// import productRouter from '../routes/productRouter.js'


// const app = express();
// const port = process.env.port ?? 8080;
// // dble question mark means default value

// app.use(morgan('combined'));
// app.unsubscribe(cors());
// app.use(express.json());
// app.use('/products', productRouter);



// app.get('/',(req,res) => {
//     res.json({msg:'hello world!'});
// })

// app.listen(port, err =>{
//     if(err) console.error(err);
//     console.log(`API server listening on port ${port}`)

// })




// import express from "express"
// import cors from "cors"
// import restaurants from "./api/restaurants.route.js"

// const app = express()

// app.use(cors())
// app.use(express.json())

// app.use("/api/v1/restaurants", restaurants)
// app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

// export default app


// from mongo web
// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 5000;
// app.use(cors());
// app.use(express.json());
// app.use(require("./routes/record"));
// // get driver connection
// const dbo = require("./db/conn");
 
// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });

const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const { default: mongoose } = require('mongoose');
const port = process.env.PORT || 5000;


connectDB();

mongoose.connection.on('connected', () =>{
    console.log('i am connected')
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));

// // Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);


app.listen(port, () => console.log(`Server started on port ${port}`));