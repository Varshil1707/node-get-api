const express = require("express");
const data = require('./dummyData')
const app = express();
const port = process.env.port || 4500
app.listen(port, () => {
  console.log("App is started on 3000");
});
app.get('/', (req, res) => {
    res.json(data)
})
