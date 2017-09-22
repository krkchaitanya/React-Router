const express = require('express');
var app=express();
var port=process.env.PORT||3003;

app.use(express.static(__dirname+"/"));



app.get("*",(req,res)=>{
  res.send(path.join(__dirname+"/index.html"));
})

app.listen(port,()=>{
  console.log(`app is running on port ${port}`);
});
