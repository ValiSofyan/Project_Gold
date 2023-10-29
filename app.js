const { log } = require("console")
const express = require("express")
const app = express ()
const PORT = process.env.PORT || 3000
const routes = require("./routes")
const datas = require("./db/datas.json")
const db = require("../Project_Gold/db/db")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/SkillData", async (req,res)=>{
    try {
        const databooks = await db("UserData").select('id','SkillData_id')
        res.status(200).json(databooks)        
    } catch (error) {
        res.status(500).json(error)    
    }
})
app.listen(PORT, ()=>{
    console.log("aku pulang");
})

app.use("/api", routes);

