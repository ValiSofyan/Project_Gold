const { log } = require("console")
const express = require("express")
const app = express ()
const PORT = process.env.PORT || 3000
const routes = require("./routes")
const datas = require("./db/datas.json")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(PORT, ()=>{
    console.log("aku pulang");
})

app.use("/api", routes);

