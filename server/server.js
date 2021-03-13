// const { static } = require('express')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = 3003

const pgp = require("pg-promise")(/*options*/);
const db = pgp("postgres://dazn311:postgress@localhost:5432/dazn311");

let users = [
    {id: 0, name: 'Vasya'},
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Georgiy'},
    {id: 3, name: 'Petr'},
]


 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(cors())


 
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



//  data.user_fio + "'" + ","+ "'" + data.login + "'" + ","+ "'" + data.password + "'" + ","+ "'" + data.user_fio_lit + "
app.post('/api/user/update', async(req, res) => {

    console.log('/api/user/update -- req.body: ', req.body );

    let idUser = req.body.id  ? req.body.id: -1;

    if(!req.body) res.send('error: Bad query data ');
    if(idUser < 0 && idUser > 1000000) res.send('error: Bad query id ');

    let data = req.body[0];
 
    // UPDATE films SET kind = 'Dramatic' WHERE kind = 'Drama';
    await db.none('UPDATE users SET user_fio = $1 "login" = $2 user_fio_lit = $3  WHERE id = $4', [data.user_fio, data.login, data.user_fio_lit, parseInt(data.id)])
        .then(function (updateData) {
            console.log("then data:", updateData);
            data = updateData;
        })
        .catch(function (error) {
            console.log("ERROR:", error);
            idUser = null;
        });

    if ( !idUser ) {
        res.status('405').send('405, Не найден пользователь')
    }else {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.set('Content-Type', 'application/x-www-form-urlencoded');
        res.status(200).json({data: data});
    } 
})

// app.post('/api/users/:id', (req, res) => {
app.post('/api/users', async(req, res) => {

    console.log('query: id ', req.body );

    let idUser = req.body.data.id  ? req.body.data.id: 0;
    if(!req.body) res.send('error: Bad query data ');
 
    await db.one("SELECT user_fio_lit FROM users WHERE id=$1", idUser)
        .then(function (data) {
            console.log("user_fio_lit:", data.user_fio_lit);
            users[2] = data.user_fio_lit;
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });

    if ( !idUser ) {
        res.status('405').send('Не найден пользователь')
    }else {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.set('Content-Type', 'application/x-www-form-urlencoded');
        res.status(200).json({name: users[2]});
    } 
})
       
app.post('/api/users/all', async(req, res) => {

    console.log('/api/users/all ');
 
    let data2 = [];
     
    await db.query("SELECT * FROM users limit 11")
        .then(function (data) {
            console.log("SELECT * FROM users: ", data );
            data2 = data;
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });

    if ( !data2 ) {
        res.status('405').send('Не найдены пользователи')
    }else {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.set('Content-Type', 'application/x-www-form-urlencoded');
        res.status(200).json(data2);
    } 
})


// add users
app.post('/api/users/append', async(req, res) => {

    let data = req.body.data.data;
    console.log('query: data ', req.body.data.data );
    console.log('query: data.user_fio: ', req.body.data.data.user_fio );

    if(!req.body) res.send('error: Bad query data ');
 
    // eslint-disable-next-line no-useless-concat
    const queryString = "INSERT INTO users (user_fio, login, password, user_fio_lit) values(" + "'" + data.user_fio + "'" + ","+ "'" + data.login + "'" + ","+ "'" + data.password + "'" + ","+ "'" + data.user_fio_lit + "'" + ") RETURNING *";

    await db.query(queryString, function (error, result) {
        console.log('query result',result);
        data = result;
        console.log('query error',error);
    });
    
    console.log('query data',data);
    



    if ( !data ) {
        res.status('405').send('Не не верно заданы данные')
    }else {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.set('Content-Type', 'application/x-www-form-urlencoded');
        res.status(200).json({data: data});
    } 
})

// add users
app.post('/api/users/append2', async(req, res) => {

    let data = req.body;
    console.log('query: data ', req.body );
    console.log('query: data.user_fio: ', req.body.user_fio );

    if(!req.body) res.send('error: Bad query data ');

    // const queryString = "INSERT INTO users (user_fio, login, password, user_fio_lit) values ($1,$2,$3,$4) VALUES (" + "'" + [data.user_fio, data.login, data.password, data.user_fio_lit].join("','") + "'" + ") RETURNING *";
    // eslint-disable-next-line no-useless-concat
    const queryString = "INSERT INTO users (user_fio, login, password, user_fio_lit) values(" + "'" + data.user_fio + "'" + ","+ "'" + data.login + "'" + ","+ "'" + data.password + "'" + ","+ "'" + data.user_fio_lit + "'" + ") RETURNING *";

    await db.query(queryString, function (error, result) {
        console.log('query result',result);
        data = result;
        console.log('query error',error);
    });
    
    
    



    if ( !data ) {
        res.status('405').send('Не не верно заданы данные')
    }else {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.set('Content-Type', 'application/x-www-form-urlencoded');
        res.status(200).json({data: data});
    } 
})

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}`)
})




// db.one("SELECT user_fio_lit FROM users WHERE id=$1", 1)
//     .then(function (data) {
//         console.log("DATA:", data.user_fio_lit);
//         users[2] = data.user_fio_lit;
//     })
//     .catch(function (error) {
//         console.log("ERROR:", error);
//     });
// console.log('db end');    