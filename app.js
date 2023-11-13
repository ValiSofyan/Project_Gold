const express = require("express")
const app = express ()
const PORT = 3001
const routes = require("./routes")
const path = require("path");
const cors = require('cors');
const session = require('express-session');

app.use(session({
    secret: 'your-secret-key', 
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.listen(PORT, ()=>{
    console.log("aku pulang");
})


app.use("/api", routes);

