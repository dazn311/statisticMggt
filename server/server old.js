// const { static } = require('express')
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const port = 3003
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
const users = [
    {id: 0, name: 'Vasya'},
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Georgiy'},
    {id: 3, name: 'Petr'},
]
 
app.use(express.static(__dirname + '/static'));

 


app.get('/js/*', (req, res) => {

    const fileName = req.url.split('.')[1];
    res.set('Content-Type','aplication/javascript');

    if ( fileName === '062fab3d') {
        res.sendFile( __dirname +'/views/build/static/js/main.062fab3d.chunk.js')
    } else if ( fileName === 'd05fb0ed') {
        res.sendFile( __dirname +'/views/build/static/js/2.d05fb0ed.chunk.js')
    } 
   
});

app.get('/css/*', (req, res) => {
    
    const fileName = req.url.split('.')[1];
    res.set('Content-Type','text/css');
    
    if ( fileName === 'e6b4ac3a') {
        res.sendFile( __dirname +'/views/build/static/css/main.e6b4ac3a.chunk.css')
    } 
    
});

app.get('/static', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile( __dirname +'/views/build/index.html')
})



// app.post('/api/users/:id', (req, res) => {
app.post('/api/users',(req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json');
    let obj = Object.keys(req.body)[0] ;
    // console.log('post req.body.id', Object.values(obj)[6] );

    let idUser = Object.values(obj)[6];
    if(!req.body) res.send('error');

    const user = users.find(function(u) {
        return u.id === parseInt(idUser)
    });

    
    if ( !idUser ) {
        res.status('405').send('Не найден пользователь')
    }else {
        // let otherObject = JSON.stringify({ name: user.name }) ;
        res.status(200).json({name: user.name});
    } 
})

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}`)
})