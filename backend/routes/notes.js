import express from "express";
var router = express.Router();

// the below '/' is actually add on extension of index.js files route .Its actually('api/auth  + our below rout')
router.get('/',(req,res)=>{
    res.json([]);
})

export default router;
