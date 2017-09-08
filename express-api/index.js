const express = require('express')
const app = express()

const mongoose = require('mongoose')
const Post = require('./models/post')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-kiss-api',{useMongoClient: true})

const db=mongoose.connection
db.on('error',console.log)
db.once('open',()=>{
  let post= new Post({title:'mongoose usage'})
  post.save(function(err){
    if(err) console.log(err)
  })
  console.log('success')
})
//查看，读取所有文章
app.get('/posts',(req,res)=>{
  Post.find().sort({'createdAt':-1}).exec(function(err,posts){
    if(err) return res.status(500).json({error:err.message})
    res.json({posts})
  })
})
//查，读取一篇文章详情
app.get('/post/:id',(req,res)=>{
  Post.find({_id:req.params.id}).exec(function(err,posts){
    if(err) return res.status(500).json({error:erer.mesage})
    res.json({posts})
  })
})
//增，添加一篇博客
app.post('/post',(req,res)=>{
  console.log('POST /post',req.body)
  var post= new Post(req.body)
  post.save(function(err){
    if(err) console.log(err)
    res.json({msg:'post saved!'})
  })

})
app.put('/post/:id',function(req,res){
  if(req.body.title==='') return res.status(400).json({error:'文章标题不能为空！'})
  Post.findById({_id:req.params.id},function(err,post){
    if(err) return res.status(500).json({error:err.message})
    for (prop in req.body){
      post[prop] =req.body[prop]
    }
    post.save(function(err){
      if(err) return res.status(500).json({error:err.message})
      res.json({
        message:'文章更新成功了'
      })
    })
  })
})
app.delete('/post/:id',function(req,res){
  Post.findById({_id:req.params.id},function(err,post){
    if(err) return res.status(500).json({error:err.message})
    post.remove(function(err){
      if(err) return res.status(500).json({error:err.message})
      res.json({message:'文章已经删除了！'})
    })
  })
})
app.listen(4000,()=>(
  console.log('running on port 4000...')
))
