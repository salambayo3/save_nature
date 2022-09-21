const express = require("express");
const app = express();


app.get("/index.html", function (req, res) {
    res.sendFile("index.html" + __dirname);
})
app.use(express.static(__dirname));


app.listen(5000, () => {
    console.log("save planet earth");
})