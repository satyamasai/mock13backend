require("dotenv").config();
const express = require("express");
const { connection } = require(".//Config/db");
const app = express();
const cors = require("cors");
const { userModel } = require("./Models/User.model");
const { scoreModel } = require("./Models/Scores.model");
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Welcome to the masai word app...");
});

app.post("/register", async(req, res) => {
    const { email,name} = req.body;
  const existing_user = await userModel.findOne({ email });
  if (existing_user) {
    res.send("User already exist")
    return;
  }

  const new_user = new userModel({
    email: email,
    name: name,
    
  });

  await new_user.save();
  res.send({msg:"user registered succesfull..."});



  });

  app.get("/dashboard",async(req,res)=>{
    const all_user = await scoreModel.find();
    console.log(all_user)
    res.send({"all_user":all_user})
  })
  

app.post("/playzone",(req,res)=>{

res.send("playzone")    
})


app.post("/score",async(req,res)=>{
    const { email,name} = req.body;
    const new_score = new scoreModel({
        email: email,
        score: score,
        
      });
    
      await new_score.save();
})



app.listen(process.env.PORT, async() => {
  try {
    await connection;
    console.log("Database Connected");
    console.log("Listening on PORT: " + process.env.PORT);
  } catch (err) {
    console.log("Databse Connection failed...");
    console.log(err);
  }
});
