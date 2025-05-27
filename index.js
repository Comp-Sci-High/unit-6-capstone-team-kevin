const express = require("express");
const req = require("express/lib/request");
const { request } = require("http");
const mongoose = require("mongoose");

const app = express();



app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(__dirname+"/public"))

app.set("view engine", "ejs");

app.use(express.json());

const postSchema = new mongoose.Schema({
  title:{type:String},
  link:{type:String},
  img:{type:String},
  description:{type:String},
  neighborhood:{type:String},
  agerange:{type:String},
});

const Post = mongoose.model("Post",postSchema,"Posts");

app.post("/add/post",async(req,res)=>{
  const post = await new Post({
    title:req.body.title,
    link:req.body.link,
    img:req.body.img,
    description:req.body.description,
    neighborhood:req.body.neighborhood,
    agerange:req.body.agerange,
  }).save()
    res.json(Post)
})

app.get("/post",async(req,res)=>{
   const posts = await Post.find({})
   res.render("post.ejs",{posts})
})

app.patch("/update/:_id",async(req,res)=>{
  const change = await Post.findOneAndUpdate({

  })
})

app.delete("/delete/:_id",async(req,res)=>{
  const gone = await Post.findOneAndUpdate({

  })
})
async function startServer(){
  
  await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.ugaf5.mongodb.net/<post>?retryWrites=true&w=majority&appName=Cluster0")




app.listen(3000, () => {
    console.log("Server is running");
  });
}


startServer();
