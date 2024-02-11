const router = require("express").Router();

router.get("/login", (req, res) => {
    if(!req.headers.authorization){
        return res.status(500).send({message : "Invalid Token"});
    }

    const token = req.headers.authorization.split(" ")[1];
    return res.send(token)
})

module.exports = router;