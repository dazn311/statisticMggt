const express = require('express');
const cors = require('cors')
const PORT =  '3005';
// const PORT = process.env.PORT || '3005';
// const bodyParser = require('body-parser');


const app = express();

// create application/json parser
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

app.use(express.json()); //work

// app.use(cors({origin: 'http://localhost:3004'})); //work

app.use(cors()); //work
app.options('*', cors());

// app.options('http://localhost:3004', cors);

// app.use(express.json);

//Вызов библиотеки
const { Pool } = require('pg');

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

//180521
async function getUserById(userId){

	return new Promise ((resolve, reject) => {
		let queryText  = ` SELECT * FROM mggt_users WHERE user_id = ${userId};`; // good
		query(queryText)
			.then(function(data){
				console.log('getUserById -- data.rows[0]:',data.rows[0] );
				let result = {
					user: data.rows[0] // get 276
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}
//180521
async function getUserAmountObjs(userId){
	// console.log('getUserAmountObjs -- userId :',userId || 1110 );
	return new Promise ((resolve, reject) => {
		let queryText  = `SELECT count(DISTINCT rec_obj_id) FROM public.mggt_recombination  ;`;
		query(queryText)
			.then(function(data){
				console.log('getUserAmountObjs then-- data.rows[0].count :',data.rows[0].count );
				let result = {
					amObjs: data.rows[0].count // get 276
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
async function getTestAll(){
	// console.log('start getEventEndedAmount :' );
	return new Promise ((resolve, reject) => {
		let queryText  = ` SELECT *  FROM get_rec_mes_am2(); `;
		query(queryText)
			.then(function(data){
				// console.log('getTestAll -- data.rows:',data.rows );
				let result = {
					resTestAll: data.rows,
					// amountEventsEnded: data.rows,
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}

//Всего согласованых событий.
// RETURN QUERY SELECT COUNT(*)::bigint as amount from mggt_recombination
async function get_stats_daily(){
	// console.log('start getEventEndedAmount :' );
	return new Promise ((resolve, reject) => {
		let queryText  = ` SELECT *  FROM get_stats_daily(); `;
		query(queryText)
			.then(function(data){
				console.log('get_stats_daily -- data.rows:',data.rows );
				let result = {
					resStatsDailyAll: data.rows,
					// amountEventsEnded: data.rows,
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}

//Всего согласованых событий.
// RETURN QUERY SELECT COUNT(*)::bigint as amount from mggt_recombination
async function getEventEndedAmount(){
	// console.log('start getEventEndedAmount :' );
	return new Promise ((resolve, reject) => {
		// let queryText  = ` SELECT count (*) as amount FROM mggt_recombination; `;
		let queryText  = ` SELECT *  FROM get_event_ended_all_daz(); `;
		// let queryText  = ` SELECT *  FROM get_rec_mes_am(); `;
		query(queryText)
			.then(function(data){

				// console.log('getEventEndedAmount -- data.rows:',data.rows );
				let result = {
					amountEventsEnded: data.rows[0].get_event_ended_all_daz,
					// amountEventsEnded: data.rows,
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
	console.log( 'Запрос /query/users/amount ');
	// console.log(req.body);
	try {
		let result1 = await getEventEndedAmount(); // get_event_ended_all_daz()
		let result = await getUsersAmount(); // get_users_amount2()
		let result2 = await getEventAllAmount(); // get_event_am()
		let result3 = await getMessageAllAmount(); //get_messages_am()
		let resTestAll = await getTestAll(); //get_messages_am() 
		// let resStatsAll = await get_stats_daily(); //() get_stats_daily
		let resultAll = {
			amountUsers: result.amountUsers || 0,
			amountEventsEnded: result1.amountEventsEnded || 0,
			amountEventsAll: result2.amountEventsAll || 0,
			amountMessagesAll: result3.amountMessagesAll || 0,
			resTestAll: resTestAll.resTestAll || 0,
			// resStatsAll: resStatsAll || 0,
		}
		console.log('resultAll',resultAll);

		res.send(resultAll);
	} catch (e){
		console.log(e);
	}
})

// ///////// get_recombination_one // 20.04.21 // to daz DB ///////////////////////////
// async function get_recombination_one(msgID){
// 	console.log('3. start get_recombination_one --msgID:',msgID );
// 	const msgID2 = parseInt(msgID);
// 	return new Promise ((resolve, reject) => {
// 		let queryText  = ` SELECT rec_name FROM get_recombination_one(388); `;
// 		// let queryText  = ` SELECT * FROM get_recombination_one(${msgID2}); `;
// 		query(queryText)
// 			.then(function(data){

// 				// console.log('4. get_recombination_one -- data.rows:',data.rows[0] );
// 				let result = {
// 					messageDetail: data.rows[0]
// 				}
// 				resolve(result);
// 			})
// 			.catch(function(err){ reject(err); console.log(err)});
// 	});
// }

// //API для первой страницы, для нижней таблицы, для вывода одного сообщения в строке // get_recombination_one
// app.post('/query/recombination/one', cors(), async function(req, res){ 
// 	console.log( '1. Запрос /query/recombination/one --req.body.msgID',req.body.msgID);
	 
// 	const msgID = parseInt(req.body.msgID);
// 	try {
// 		let result = await get_recombination_one(req.body.msgID); // get_event_ended_all_daz()
// 		console.log( '2. Запрос /query/recombination/one --result.messageDetail:',result.messageDetail);
// 		if(result.messageDetail){
// 			res.send(result);
// 		}else {
// 			res.send({result:'undefined'});
// 		}
		
// 	} catch (e){
// 		console.log(e);
// 	}
// })

///////// get_recombination_one // 20.04.21 // to daz DB ///////////////////////////
async function get_recombination_one(msgID){
	
	return new Promise ((resolve, reject) => {
		let queryText  = ` SELECT * FROM get_recombination_one(${msgID2}); `;
		query(queryText)
			.then(function(data){
				let result = {
					messageDetail: data.rows[0]
				}
				resolve(result);
			})
			.catch(function(err){ reject(err); console.log(err)});
	});
}

///////// get_users_all_stats_byinterval // 22.04.21 // to daz DB ///////////////////////////
async function get_users_all_stats_byinterval(start_date,end_date){
	console.log( 'Запрос /query/users/amount  ',start_date,end_date);
	const _start_date = new Date(start_date) 
	const _end_date = new Date(end_date) 
	return new Promise ((resolve, reject) => { 
		// let queryText  = ` SELECT count(*) FROM mggt_users_log WHERE (user_log_user_id = 1) AND (user_log_date > '${start_date}') AND (user_log_date < '${end_date}') and user_log_type = 'login'; `;
		// let queryText  = ` SELECT count(user_log_user_id), user_log_user_id FROM mggt_users_log WHERE  (user_log_date > '${start_date}') AND (user_log_date < '${end_date}') and user_log_text = 'Успешный вход' GROUP BY user_log_user_id; `;
		
		// let queryText  = ` SELECT 	count(user_log_user_id), 
		// 							user_log_user_id::bigint 
		// 						FROM 
		// 							mggt_users_log 
		// 						WHERE  
		// 							(user_log_date > '${start_date}') AND (user_log_date < '${end_date}') and user_log_text = 'Успешный вход' 	
		// 						GROUP BY 
		// 							user_log_user_id 	; `;

		let queryText  = ` SELECT * FROM mggt_users_log WHERE (user_log_user_id = 1) and user_log_type = 'new_msg'; `;
		// let queryText  = ` SELECT count(*) FROM mggt_users_log WHERE (user_log_user_id = 1)  and user_log_type = 'login'; `;
		
		query(queryText)
			.then(function(data){
				console.log( '5. get_users_all_stats_byinterval --data.rows:',data.rows);
				 
				resolve(data.rows);
			})
			.catch(function(err){ reject(err); console.log(err)});
	});
}

//API для первой страницы, для нижней таблицы, для вывода одного сообщения в строке // get_recombination_one
app.post('/query/recombination/one', cors(), async function(req, res){ 
	try {
		if(req.body.msgID){
			let result = await get_recombination_one(req.body.msgID); // get_event_ended_all_daz()
			console.log( '2. Запрос /query/recombination/one --result:',result);
			if(result.messageDetail){
				res.send(result);
			}else {
				res.send({result:'undefined'});
			}
		}
		
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

//API endpoint 180521
app.post('/query/user', cors(), async function(req, res){
	console.log( 'Запрос /query/user/:userId  req.body',req.body.userId);
	try {
		let resUser = 		await getUserById(258);
		let resUserAmObjs = await getUserAmountObjs(req.body.userId);
		let result = {
			user: resUser.user || 'vasya',
			userAmObjs: resUserAmObjs.amObjs || 0,
		}
		// console.log('/query/user/:userId  result',result);


		res.send(result);
	} catch (e){
		console.log(e);
	}
})

//API endpoint public.get_users_all_stats_byinterval
app.post('/query/users/active', cors(), async function(req, res){
	console.log( 'Запрос /query/users/active  ',req.body);
	// console.log(req.body);
	const {start_date, end_date} = req.body;
	try {
		let resUsersAll = await get_users_all_stats_byinterval(start_date, end_date);
		let resultAll = {
			usersActive: resUsersAll || 0,
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


// {
//     rec_id: 436,
//     rec_obj_id: 101,
//     rec_send_id: 25,
//     rec_recip_id: 0,
//     rec_descrip: 'Описание заявки',
//     rec_n: 1,
//     rec_name: 'что за покрытие? включить в границу',
//     rec_locat: '',
//     rec_status: 2,
//     rec_adres: 'Адрес заявки',
//     rec_date: 2021-03-09T13:48:54.000Z,
//     rec_image: '',
//     rec_xy: '-18629.4091951032;10612.5560204283',
//     rec_read: 0,
//     rec_smej_obj_id: 101
//   },