const express = require("express");
const db = require("./db")
const pizza = require("./models/pizzaModel")
const app = express();
app.use(express.json());
app.get("/",(req,res) => {
    res.send("Server working");
});

app.get("/getpizzas",(req,res) => {
    pizza.find({},(err,docs)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(docs)
        }
    })
})

const port = process.env.PORT || 5000;
app.listen(port, () => 'Server running on port');