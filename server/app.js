const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config")
const port = 4000;
const {default : mongoose} = require("mongoose");

app.use(cors({origin : true}));

app.get("/", (req, res) => {
    return res.json("Server app.js");
});

// user authentication route
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);


mongoose.connect(process.env.DB_STRING, {useNewUrlParser : true});
mongoose.connection
.once("open", () => console.log("Mongoose Connected"))
.on("error", (error) => {
    console.log(`Error : ${error}`);
})

app.listen(port, () => {
    console.log(`Listning to port ${port}`);
});