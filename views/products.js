const express=require("express")
const router=express.Router()

const {products}=require("../db.json")

console.log(products)

router.route("/")
       .get((req,res)=>{
        res.json({products:products})
       })
       .post((req,res)=>{
        console.log(req.body)
        res.json("received")
        })

module.exports=router
