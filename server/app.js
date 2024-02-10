const express = require("express");
const app = express();


const port = 4000;

app.get("/", (req, res) => {
    return res.json("Server app.js");
});

app.listen(port, () => {
    console.log(`Listning to port ${port}`);
});