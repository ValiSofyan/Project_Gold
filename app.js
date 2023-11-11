const express = require("express")
const app = express ()
const PORT = 3000
const routes = require("./routes")
const path = require("path");
const cors = require('cors');
const db = require("./db/db");


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, ()=>{
    console.log("aku pulang");
})

app.use("/api", routes);

