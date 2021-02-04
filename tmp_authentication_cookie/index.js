var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
var FileStore = require('session-file-store')(session)

var app = express()

var onlyMyAuthData = {
    email: "cxz5309@naver.com",
    password: "123",
    name: "kim"
}

app.set("view engine", "pug");

app.use(express.json())
app.use(express.urlencoded( {extended : false } ));

app.use(session({
    secret: 'asadlfkj!@#!@#dfgasdg',
    resave: false,
    saveUninitialized: true,
    store:new FileStore()
}))
 
app.get('/', function (req, res, next) {
    console.log(req.session);
    if(req.session.num === undefined){
        req.session.num = 1;
    } else {
        req.session.num =  req.session.num + 1;
    }
    if(req.session.is_logined === undefined){
        req.session.is_logined = false;
    }
    res.render('home', { title: 'Hey', is_logined: req.session.is_logined});
})

app.post('/login_process', (req, res) =>{
    var post = req.body;
    var email = post.email;
    var password = post.pwd;
    if(email === onlyMyAuthData.email && password === onlyMyAuthData.password){
        req.session.is_logined = true;
        req.session.name = onlyMyAuthData.name;
        req.session.save(()=>{
            res.send("Welcome");
        })
    }else{
        res.send("Login Fail");
    }
})

app.get('/logout', (req,res) =>{
    req.session.destroy((err) => {
        res.redirect('/');
    })
})
 
app.listen(3000, function () {
    console.log('3000!');
});