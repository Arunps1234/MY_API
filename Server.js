const express = require("express")
const app = express()
const user = require("./Model/Auth")
require("./config/coonect")
const bcrypt = require("bcrypt")

app.use(express.json())

app.listen(5050, ()=>{
    console.log("Server is running at port:5050")
})

app.get("/", (req, res)=>{
    res.send("Hello Arun")
})

app.post("/register", async (req, res)=>{
    const {firstname, lastname, email, phone, password} = req.body

    if (!firstname || !lastname || !email || !phone || !password) {
        res.json({"msg":"All fields are mandatory"})
    }

    const checkUser = await user.findOne({email});

    if (checkUser) {
        res.json({"msg":"User already registered with this email address"})
    }

    else {
const hashpassword = await bcrypt.hash(password, 10);

const createUser = await user.create({
    firstname,
    lastname,
    email,
    phone,
    password : hashpassword
})
res.json(createUser)
    }
})