const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("hello world");
});


app.get("/mamang",(req,res)=>{
    res.send("hello world")
})

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/mumung", (req, res) => {
    res.send("halo dunia");
  });

app.listen(port, () => {
  console.log("server started");
});