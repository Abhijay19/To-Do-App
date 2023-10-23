import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let newItems = []
let newItems2 = []
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let month = months[d.getMonth()];
let date = d.getDate();
let day = days[d.getDay()];
let year = d.getFullYear();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.post("/submit",(req,res)=>{    

    let newItem = req.body.newItem;   // getting item user put
      newItems.push(newItem);
      console.log(newItems)  //pushing item in newItems array[] which we created above
      res.render("index.ejs",{      
        newListItems : newItems     ,monthnow: month,datenow: date,daynow: day,yearnow: year})  // objects which need to be shown in index.ejs
      });

app.post("/submit2",(req,res)=>{    

    let newItem2 = req.body.newItem2;   // getting item user put
    newItems2.push(newItem2);  //pushing item in newItems array[] which we created above
        res.render("work.ejs",{      
        newListItems2 : newItems2     ,yearnow: year})  // objects which need to be shown in index.ejs
     });

 app.get("/",(req,res)=>{
        res.render("index.ejs",{      
      newListItems : newItems     ,monthnow: month,datenow: date,daynow: day,yearnow: year})  // objects which need to be shown in index.ejs
    });
app.get("/work",(req,res)=>{
        res.render("work.ejs",{      
      newListItems2 : newItems2     ,yearnow: year})  // objects which need to be shown in index.ejs
    });


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });