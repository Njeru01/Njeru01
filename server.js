const EXPRESS = require('express');
const APP= EXPRESS();
const PORT= 2998;

//configure app to accept get requests
APP.get('/', function(req, res){
  res.send("Hello Deathstroke");
});

APP.listen(PORT, function(){
  console.log("Server listening on "+PORT);
});
