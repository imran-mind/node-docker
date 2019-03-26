const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Be Happy, Live young oohhhhh');
});

app.listen(3000, ()=>{
    console.log('Node API Server is Running on 3000');
});