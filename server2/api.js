const express = require('express');
const cors = require('cors')
const PORT =  '3005';
// const PORT = process.env.PORT || '3005';

const app = express();

app.use(cors({origin: 'http://localhost:3004'}));
//Вызов библиотеки
const { Pool } = require('pg')

//Покдючение пула
const pool = new Pool({
	user: "mggt_alex",
	password: "79y7BdJFtmqJVtJn",
	host: "176.53.160.74",
	port: "5432",
	database: "test_polygon_2",
	max: 25,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000
})

//При ошибке переподключаемся к базе
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

//Нормализированная функция для создания запросов
async function query(q,data){
	const client = await pool.connect()
	let res;
	try {
		await client.query('BEGIN')
		try {
			res = await client.query(q,data)
			await client.query('COMMIT')
		} catch (err) {
			await client.query('ROLLBACK')
			throw err
		}
	} finally {
		client.release()
	}
	return res
}


// router.post('/users', UsersController.getAllUsers);
// http://localhost:3005/api/users
//Всего пользователей
// RETURN QUERY select count(*)::bigint from mggt_users   GROUP BY  mggt_users.user_id;


async function getUsersAll(){

	return new Promise ((resolve, reject) => {
		// let queryText  = ` SELECT count (*) as amount FROM mggt_users; `; // good
		let queryText  = ` SELECT * FROM get_users_all(); `; // good
		query(queryText)
			.then(function(data){
				console.log('getUsersAmount -- data.rows[0]:',data.rows[5] ,data.rows[6] );
				let result = {
					usersAll: data.rows // get 276
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}
async function getUsersAmount(){
	return new Promise ((resolve, reject) => {
		let queryText  = ` SELECT count (*) as amount FROM get_users_amount2(); `; // good
		query(queryText)
			.then(function(data){
				// console.log('getUsersAmount -- data.rows[0]:',data.rows[0]  );
				let result = {
					// amountUsers: data.rows[0].get_event_ended_all_daz,
					amountUsers: data.rows[0].amount // get 276
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}

//Всего согласованых событий.
// RETURN QUERY SELECT COUNT(*)::bigint as amount from mggt_recombination
async function getEventEndedAmount(){
	return new Promise ((resolve, reject) => {
		// let queryText  = ` SELECT count (*) as amount FROM mggt_recombination; `;
		// let queryText  = ` SELECT *  FROM get_event_ended_all_daz(); `;
		let queryText  = ` SELECT *  FROM get_rec_mes_am(); `;
		query(queryText)
			.then(function(data){
				// console.log('getEventEndedAmount -- data.rows[0]:',data.rows[0] );
				console.log('getEventEndedAmount -- data.rows[0]:',data.rows[0] );
				let result = {
					// amountEventsEnded: data.rows[0].get_event_ended_all_daz,
					amountEventsEnded: data.rows[0],
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}
//Всего  событий.
// RETURN QUERY SELECT COUNT(*)::bigint as amount from mggt_recombination;
async function getEventAllAmount(){
	return new Promise ((resolve, reject) => {
		let queryText  = ` SELECT *  FROM get_event_am(); `;
		query(queryText)
			.then(function(data){
				// console.log('getEventAllAmount -- data.rows[0]:',data.rows[0] );
				let result = {
					amountEventsAll: data.rows[0].get_event_am,
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}
//Всего  сообщений.
// //RETURN QUERY SELECT COUNT(*)::bigint as ammess from mggt_message ;
async function getMessageAllAmount(){
	return new Promise ((resolve, reject) => {
		let queryText  = ` SELECT *  FROM get_messages_am(); `;
		query(queryText)
			.then(function(data){
				console.log('getEventAllAmount -- data.rows[0]:',data.rows[0] );
				let result = {
					amountMessagesAll: data.rows[0].get_messages_am,
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}



//API endpoint
app.post('/query/users/amount', cors(), async function(req, res){
	console.log( 'Запрос /query/users/amount  ');
	// console.log(req.body);
	try {
		let result1 = await getEventEndedAmount(); // get_event_ended_all_daz()
		let result = await getUsersAmount(); // get_users_amount2()
		let result2 = await getEventAllAmount(); // get_event_am()
		let result3 = await getMessageAllAmount(); //get_messages_am()
		let resultAll = {
			amountUsers: result.amountUsers || 0,
			amountEventsEnded: result1.amountEventsEnded || 0,
			amountEventsAll: result2.amountEventsAll || 0,
			amountMessagesAll: result3.amountMessagesAll || 0,
		}
		console.log('resultAll',resultAll);


		res.send(resultAll);
	} catch (e){
		console.log(e);
	}
})
//API endpoint
app.post('/query/users', cors(), async function(req, res){
	console.log( 'Запрос /query/users/amount  ');
	// console.log(req.body);
	try {
		let resUsersAll = await getUsersAll();
		let resultAll = {
			usersAll: resUsersAll.usersAll || 0,
		}
		console.log('resultAll',resultAll);


		res.send(resultAll);
	} catch (e){
		console.log(e);
	}
})


// work funcs
async function getUsersAmount0(){
	return new Promise ((resolve, reject) => {
		let queryText  = ` SELECT count (*) as amount FROM get_users_amount2(); `; // good
		query(queryText)
			.then(function(data){
				let result = {
					amountUsers: data.rows[0].amount // get 276
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}




app.listen(PORT, () => console.log('==============Server start on port:',PORT,'======================'))


