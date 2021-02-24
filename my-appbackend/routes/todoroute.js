const todo = require("../models/todo.model");
const express = require('express');
const router = express.Router();


router.post("/add",(req,res)=>{

    const new_todo = new todo(req.body);
    new_todo.save((err,todo)=>{
        if(err){
            return res.status(400).json({
                err_msg:err.message,
                err:"todo not saved in the database"
            })
        }
        res.status(200).json({
            todo:todo.description,
            message:'todo saved successfully'
        })
    })
});

router.route("/").get((req,res)=>{
    todo.find().exec((err,response)=>{
        if(err || !response){
            return res.status(400).json({
                err:"No Todo to show"
            })
        }
        res.status(200);
        res.send(response);
    })
});

router.route("/delete/:id").delete((req,res)=>{
    const todoid = req.params.id;
    todo.findByIdAndDelete(todoid).exec((err,response)=>{
        if(err){
            return res.status(400).json({
                err:"todo is not deleted"
            })
        }
        res.status(200).json({
            msg:`${response.description} deleted successfully`
        })
    })
})

module.exports = router;
