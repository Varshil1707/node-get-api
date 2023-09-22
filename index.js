const express = require("express");
const data = require('./dummyData')
const app = express();
app.listen(3000, () => {
  console.log("App is started on 3000");
});
app.get('/', (req, res) => {
    res.json(data)
})
