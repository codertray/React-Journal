import express from "express";
import { entryList } from "./db";

//variables
const app = express()
const port = 3000;
var dates;

//middlewares
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(async (req, res, next) => {
    dates = await entryList();
    next();
})


app.get("/", (req, res) => {
    res.send("./views/home.html")
});

app.get("/write", (req, res) => {
    res.sendFile("./views/write.html")
});

app.get("/submit", (req, res) => {
    res.redirect("/")
})

dates.forEach(date => {
    app.get("/entry/" + date, (req, res) => {
        res.sendFile("./views/entry.html")
    });
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
