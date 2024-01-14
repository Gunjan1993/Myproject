const express=require("express");
const app=express();
const port=5000;
const cors=require("cors")
const bodyParser=require("body-parser")
app.use(cors());
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port,()=>{
console.log(`Server works on ${port}`)
})


app.get('/api',(req,res)=>{
    res.send("This is from server")
});

// app.post('/failure',async(req,res)=>{
//     try{
//         console.log(req.body)
//        // return res.redirect("http://localhost:3000/failure")
//     }
//     catch{
//         console.log(error)
//     }
    
// })
app.post('/success',async(req,res)=>{
    try{
        console.log(req.body)
        return res.redirect("http://localhost:3000/success")
    }
    catch{
        console.log(error)
    }
    
})