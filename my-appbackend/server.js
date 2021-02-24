const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const cors = require('cors');
const PORT = process.env.port || 5000;
require('dotenv').config();
const todoroutes = require("./routes/todoroute");

mongoose.connect(process.env.database,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("DB CONNECTED"))
.catch(err=>{console.log(err.message)})

app.use(bodyParser.json());
app.use(cors());

app.use("/todo",todoroutes);


app.listen(PORT,()=>console.log(`Server is running at http://localhost:${PORT}`));