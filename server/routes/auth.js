const router = require("express").Router();

const user = require("../models/user")

const admin = require("../config/firebase.config")
router.get("/login", async (req, res) => {
    if(!req.headers.authorization){
        return res.status(500).send({message : "Invalid Token"});
    }

    const token = req.headers.authorization.split(" ")[1];
    try{
        const decodeValue = await admin.auth().verifyIdToken(token);
        if(!decodeValue){
            return res.status(505).json({message : "Un Authorized"});
        }else{
            // Checking User exists or not
            // return res.status(200).json(decodeValue);
            const userExists = await user.findOne({"user_id": decodeValue.user_id})
            if(!userExists){
                return res.send("Need to Create")
            }else{
                return res.send("Need to update user")
            }
        }
    }catch(error){
        return res.status(505).json({message : error});
    }
})

module.exports = router;