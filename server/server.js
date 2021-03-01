// const { static } = require('express')
const express = require('express')
const app = express()
const port = 3003
 
const users = [
    {id: 0, name: 'Vasya'},
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Slava'},
    {id: 3, name: 'Petr'},
]
 
app.use(express.static(__dirname + '/static'));


app.get('/js/*', (req, res) => {
    console.log('/build/static : req.slice',req.url.split('.')[1]); 
    const fileName = req.url.split('.')[1];
    res.set('X-Content-Type','aplication/javascript');
    if ( fileName === '062fab3d') {
        
        res.sendFile( __dirname +'/views/build/static/js/main.062fab3d.chunk.js')
    } 
    if ( fileName === 'd05fb0ed') {
        res.sendFile( __dirname +'/views/build/static/js/2.d05fb0ed.chunk.js')
    } 
   
});

app.get('/css/*', (req, res) => {
    const fileName = req.url.split('.')[1];
    res.set('X-Content-Type','text/css');
    if ( fileName === 'e6b4ac3a') {
        res.sendFile( __dirname +'/views/build/static/css/main.e6b4ac3a.chunk.css')
    } 
    
});

app.get('/static', (req, res) => {
    // res.sendFile( __dirname +'/views/index.html')
    res.set('Content-Type', 'text/html');
    res.sendFile( __dirname +'/views/build/index.html')
})



app.get('/api/users/:id', (req, res) => {

    const user = users.find(function(c) {
        return c.id === parseInt(req.params.id)
    });
    if ( !user ) {
        res.status('404').send('Не найден пользователь')
    }else {
        res.send(user.name);
    }

    
})

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}`)
})