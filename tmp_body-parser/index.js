var express = require('express')
var app = express();
var router = express.Router();

app.use(express.json())
app.use(express.urlencoded( {extended : false } ));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.send("test1")
    console.log(req.params.id);
    console.log(req.params);
    console.log(req.body)
})
app.post('/user_1', (req, res) =>{
    console.log(req.query);
    console.log(req.params.id);
    console.log(req.params);
    console.log(req.body)
    const title = req.body.title;
    const contents = req.body.contents;
    res.send('title :' + title + ' ' +'contents :' + contents);
})

app.get('/user', (req, res) =>{
    res.render('user');
    console.log(req.params.id);
    console.log(req.params);
    console.log(req.body)
})
app.listen(4000);
