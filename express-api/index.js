const express = require('express')
const app = express()

const mongoose = require('mongoose')
const Post = require('./models/post')
mongoose.connect('mongodb://localhost:27017/express-kiss-api')

const db=mongoose.connection
db.on('error',console.log)
db.once('open',()=>{
  let post= new Post({title:'mongoose usage'})
  post.save(function(err){
    if(err) console.log(err)
  })
  console.log('success')
})

app.get('/about',(req,res)=>{
  res.send('this is about page')
})
app.get('/faq',(req,res)=>{
  console.log('this is about page faq')
})
app.listen(4000,()=>(
  console.log('running on port 4000...')
))
