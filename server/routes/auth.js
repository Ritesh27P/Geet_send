const router = require("express").Router();

router.get("/login", (req, res) => {
    return res.json("Auth.js Login with google");
})

module.exports = router;