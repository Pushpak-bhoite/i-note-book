import express from "express";
var router = express.Router();
import User from "../models/User.js";

// the below '/' is actually add on extension of index.js files route .Its actually('api/auth  + our below rout')

router.post('/', (req, res) => {
    const user = new User(req.body);
    user.save();
    console.log(user + "\n\n => Successfully data inserted in the ")
    res.send(req.body);

})

router.get('/', async (req, res) => {
    try {
        const user = await User.find({});
        res.send(user);
    } catch (error) {
        res.send('An error occured ==>> ' + error);
    }
})

export default router;