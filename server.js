///////////////////////////////////  imports here.,..... /////////////////////////////////
let express = require('express');




////////////////////////////// initialising app here...........  /////////////////////////////////////
let app = express();

let port = process.env.PORT || 2000;




app.get("/", function(req, res, next){
    console.log("hello");
    res.send("heelo ");
});


app.listen(port, () => console.log("App listening on port : ", port));
