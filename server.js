const express = require('express');
const app=express();
var mysql=require('mysql');
var session = require('express-session');
app.set('view-engine','ejs');
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"devavani@2706",
  database:"acr"
});
con.connect(function(err){
  if(err)throw err;
  console.log("Connected");
});
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
res.render('login.ejs');
});
/************************************ */
// for action
app.post('/login', function(request, response) {
  var id = request.body.loginId;
  var paswd = request.body.paswd;
  if (id && paswd) {
// check if user exists
      con.query('SELECT * FROM login WHERE id = ? AND paswd = ?', [id, paswd], function(error, results, fields) {
          if (results.length > 0) {
              request.session.loggedin = true;
              request.session.username = id;
              response.render('index.ejs');
          } else {
              response.send('Incorrect ID and/or Password!');
          }           
          response.end();
      });
  } else {
      response.send('Please enter ID and Password!');
      response.end();
  }
});
/************************************ */
app.get('/home',(req,res)=>{
  res.render('index.ejs');
});
app.get('/score',(req,res)=>{
  res.render('result.ejs');
});
app.get('/logout',(req,res)=>{
  req.session.loggedin = false;
  res.render('login.ejs');
})
app.post('/result',(req,res)=>{
  var id,tname,total;
  var person={
    id:req.body.tid,
    tname:req.body.firstName,
    total:req.body.gt
  };
  con.query('INSERT INTO record SET ?',person,function(err,result){
    if(err)throw err;
    else{
    res.render('Response.ejs');
    console.log('1 record inserted');
    }
  });
});
/*********************************/
app.post('/showResult',(req,res)=>{
  var id=req.body.loginId;
  var t,name;
  con.query('SELECT total,tname FROM record WHERE id = ?', [id], function(error, results, fields) {
    if(error)throw error;
    if(results.length>0){
      t=results[0].total;
      name=results[0].tname;
      console.log(t);
      res.render('showResult.ejs',{data:t,name:name});
    }
  });
});
app.listen(4000);