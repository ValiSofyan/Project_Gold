const { log } = require("console")
const express = require("express")
const app = express ()
const Port = 3000 || process.env.PORT
const routes = require("./routes")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", routes);

