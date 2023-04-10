const express=require('express');
const Posts=require('../models/posts');
const posts = require('../models/posts');

const router=express.Router();
//SAVE POSTS
router.post('/post/save',(req,res)=>{
    let newPost= new Posts(req.body);
    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
               error:err
            });
        }
        return res.status(200).json({
            success:"Post Saved Successfully"
        });
});
});

//GET METHOD
router.get('/get',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status (400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        })
    })
})

//Get Specific data
router.get('/get/:id',(req,res)=>{
    let postId=req.params.id;
    Posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(200).json({
                error:err
            })
          
        }
        return res.status(200).json({
            success:true,
            post
        })
    })
}) 
//Update Method
router.put('/post/update/:id',(req,res)=>{
Posts.findByIdAndUpdate(
    req.params.id,{$set:req.body},(err,post)=>{
        if(err){
            res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"UPDATED SUCCESSFULLY"
        })
    }
)
})

//DELETE POST
router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }return res.status(200).json({
            success:"Successfully Deleted"
        })
    })
})
module.exports=router;