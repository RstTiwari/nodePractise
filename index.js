const express = require("express");
const app = express();
const port = process.env.PORT || 3000 ;
const {Worker}  = require("worker_threads");

app.get("/non-blocking/", (req, res) => {
  res.status(200).send("the no blocking thread");
});

app.get("/blocking", async (req, res) => {
  const worker = new Worker("./worker.js")
  worker.on("message", (data) => {
    res.status(200).send(`blocking thread ${data}`);
  });

  worker.on("error", (msg) => {
    res.status(200).send(`blocking thread ${msg}`);
  });
});



app.listen(port ,()=>{
    console.log(`app is running on the port ${port}`);
})