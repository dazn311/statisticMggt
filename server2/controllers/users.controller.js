
const db = require('../db');
 
class UsersController {
    // post http://localhost:3005/api/user
    async creatUser (req, res) {
        const {user_fio, login, password, user_fio_lit} = req.body;
        let result = 0;
        const newUser = await db.proc('createUser',[user_fio, login, password, user_fio_lit],null,result);
        console.log('result',result);
        // const newUser = await db.query('INSERT INTO users (user_fio, login, password, user_fio_lit) values ($1,$2,$3,$4) RETURNING *', 
        // [user_fio, login, password, user_fio_lit]);
        // res.json(newUser.rows[0]);
        res.set('Access-Control-Allow-Origin', 'http://localhost:3004');
        res.set('Content-Type', 'application/x-www-form-urlencoded');
        res.json({'newUser':newUser});
    }

    // get http://localhost:3005/api/users
    async getAllUsers0 (req, res) {
        console.log(' get http://localhost:3005/api/users');
        res.set('Access-Control-Allow-Origin', 'http://localhost:3004');
        res.set('Content-Type', 'application/x-www-form-urlencoded');
        const users = await db.query('SELECT * FROM users');
        res.json(users.rows);
    }
     
    // post http://localhost:3005/api/users
    async getAllUsers02 (req, res) {
        console.log(' post http://localhost:3005/api/users');
        res.set('Access-Control-Allow-Origin', 'http://localhost:3004');
        res.set('Content-Type', 'application/x-www-form-urlencoded');
        // const users = await db.func('get_users');
        const users = await db.query('select * from get_users()');
        res.json(users);
    }

    // post http://176.53.160.74:5432/test_polygon_2  // 
    async getAllUsers (req, res) {
        console.log(' post http://176.53.160.74:5432/test_polygon_2');
        res.set('Access-Control-Allow-Origin', req.headers.origin);
        // res.set('Access-Control-Allow-Origin', 'http://localhost:3004');
        res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
        res.set('Content-Type', 'application/x-www-form-urlencoded'); 
 
        const users = await db.func(`get_users`);
        console.log('users',users);
        res.json(users);
    }












    // post http://localhost:3005/api/new_events
    // post http://176.53.160.74:5432/test_polygon_2  // 
    async getNewEvents (req, res) {
        console.log(' post http://176.53.160.74:5432/test_polygon_2',req.headers.origin);
        res.set('Access-Control-Allow-Origin', req.headers.origin);
        res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
        res.set('Content-Type', 'application/x-www-form-urlencoded'); 
 
        console.log('req.body',req.body.data);
        // const data = req.body.data;
        const { user_id } = req.body.data; //work
        const users = await db.func(`return_users`,{"user_id":user_id }); //work
        // const users = await db.func(`get_users`);
        //get_objects( _user_id integer) // получить id объекта
        // get_message( _rec_id integer) // получить сообщения по объекту
        
        console.log('users',users);
        res.json(users);
    }


    // post http://localhost:3005/api/user_obj
    // post http://176.53.160.74:5432/test_polygon_2  // 
    async getUserObj (req, res) {
        console.log(' post http://176.53.160.74:5432/test_polygon_2',req.headers.origin);
        res.set('Access-Control-Allow-Origin', req.headers.origin);
        res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
        res.set('Content-Type', 'application/x-www-form-urlencoded'); 
 
        console.log('req.body',req.body.data);
        // const data = req.body.data;
        const { user_id } = req.body.data; //work
        const users = await db.func(`return_users`,{"user_id":user_id }); //work
        // const users = await db.func(`get_users`);
        console.log('users',users);
        res.json(users);
    }
      














    // get http://localhost:3005/api/user/2
    async getUser0 (req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        // const user = await db.query('CALL yourStoredProcedure();');
        // const user = await db.proc('SELECT * FROM users WHERE id = $1', [id]);
        res.json(user.rows[0]);
    }

    // post http://localhost:3005/api/user/2
    async getUser (req, res) {
        console.log(' post http://176.53.160.74:5432/test_polygon_2');
        res.set('Access-Control-Allow-Origin', req.headers.origin); 
        res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
        res.set('Content-Type', 'application/x-www-form-urlencoded'); 
 
        console.log('req.body',req.body.data);
        // const data = req.body.data;
        const {login , password} = req.body.data; //work
        const users = await db.func(`return_users`,{"login":login , "password":password}); //work 
        console.log('users',users);
        res.json(users);
    }

    // put http://localhost:3005/api/user
    async updateUser (req, res) {
        const {user_fio, login, password, user_fio_lit, id} = req.body.data;
        console.log(user_fio, login, password, user_fio_lit, id);
        console.log(req.body);

        const newUser = await db.query('UPDATE users SET user_fio = $1, login = $2, password = $3, user_fio_lit = $4 WHERE id = $5 RETURNING *', 
        [user_fio, login, password, user_fio_lit, id]);
        res.json(newUser.rows[0]);

    }

    // delete http://localhost:3005/api/user/13
    async deleteUser (req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM users WHERE id = $1', [id]);
        res.json(user.rows[0]);
    }

    
}

module.exports = new UsersController();


    ////  data.user_fio + "'" + ","+ "'" + data.login + "'" + ","+ "'" + data.password + "'" + ","+ "'" + data.user_fio_lit + "
// console.log('====================================');
//         console.log('user_fio, login, password, user_fio_lit',user_fio, login, password, user_fio_lit);
//         console.log('====================================');


// -- FUNCTION: public.get_users()

// -- DROP FUNCTION public.get_users();

// CREATE OR REPLACE FUNCTION public.get_users(
// 	)
//     RETURNS SETOF users 
//     LANGUAGE 'plpgsql'
//     COST 100
//     VOLATILE PARALLEL UNSAFE
//     ROWS 1000

// AS $BODY$
// BEGIN
//   IF EXISTS(SELECT login  FROM users WHERE login = $1 AND password = $2)
//   THEN 
//   	RETURN QUERY SELECT  login, password  , user_fio , user_fio_lit  FROM users ;
//   ELSEIF EXISTS(SELECT login  FROM users WHERE login = $1)
//   THEN 
// 	RETURN QUERY  SELECT login FROM users;
//   ELSEIF EXISTS(SELECT password  FROM users WHERE password = $2)
//   THEN 
// 	RETURN QUERY SELECT password   FROM users;
//   END IF;
  
// END;
// $BODY$;

// ALTER FUNCTION public.get_users()
//     OWNER TO dazn311;


// work
// -- FUNCTION: public.get_users()

// -- DROP FUNCTION public.get_users();

// CREATE OR REPLACE FUNCTION public.get_users(
// 	)
//     RETURNS SETOF users 
//     LANGUAGE 'plpgsql'
//     COST 100
//     VOLATILE PARALLEL UNSAFE
//     ROWS 1000

// AS $BODY$
// BEGIN
  
//   	RETURN QUERY SELECT  *  FROM users ;
  
  
// END;
// $BODY$;

// ALTER FUNCTION public.get_users()
//     OWNER TO dazn311;