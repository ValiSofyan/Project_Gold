const express = require("express")
const dataCorp = require("../db/userCorpData.json")
const fs = require("fs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



Module.export = userCorpController