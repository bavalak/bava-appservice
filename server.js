const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.get("/",(req,res)=> {
  res.send("<h1> Welcome People - bava </h1>
           <p> Deployed using Github Actions </p> ");
});

app.listen(port,() => {
  console.log(`Server running on port ${port}`);
});
