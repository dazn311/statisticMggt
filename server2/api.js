const express = require('express');
const cors = require('cors')
const PORT =  '3005';
// const PORT = process.env.PORT || '3005';

const proj4 =require('proj4');
const def_msk = '+proj=tmerc +lat_0=55.6666666667 +lon_0=37.5 +x_0=0 +y_0=0 +k_0=1. +a=6377397 +rf=299.15 +towgs84=396,165,557.7,-0.05,0.04,0.01,0 +no_defs';
const def_wgs = '+proj=tmerc +lat_0=0 +lon_0=60.05 +k=1 +x_0=1500000 +y_0=-5911057.63 +ellps=krass +towgs84=24,-123,-94,-0.02,0.25,0.13,1.1 +units=m +no_defs';
const app = express();
app.use(express.json()); //work

app.use(cors({
	origin: "http://localhost:3004",
	methods: ["POST"],
})); //work
app.options('*', cors());

//Вызов библиотеки
const { Pool } = require('pg');

//Покдючение пула
const pool = new Pool({
	// user: "mggt_polygon",
	user: "mggt_alex",
	password: "79y7BdJFtmqJVtJn",
	host: "176.53.160.74",
	port: "5432",
	// database: "ismggt_geo",
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


async function getUsersAll(){

	return new Promise ((resolve, reject) => {
		let queryText  = ` SELECT * FROM get_users_all(); `; // good
		query(queryText)
			.then(function(data){
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
	return new Promise ((resolve, reject) => {
		let queryText  = `SELECT count(DISTINCT rec_obj_id) FROM public.mggt_recombination WHERE rec_send_id = ${userId};`;
		query(queryText)
			.then(function(data){
				let result = {
					amObjs: data.rows[0].count // get 276
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}

//180521
async function getUserAmountAllMessages(userId){
	return new Promise ((resolve, reject) => {
		let queryText  = `SELECT count(*) FROM public.mggt_message WHERE msg_user_id = ${userId};`;
		query(queryText)
			.then(function(data){
				let result = {
					amAllMessages: data.rows[0].count // get 276
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}

//180521
async function getUserAmountMessagesWithFile(userId){
	return new Promise ((resolve, reject) => {
		let queryText  = `SELECT count(*) FROM public.mggt_message WHERE msg_user_id = ${userId} and msg_file IS NOT NULL;`;
		query(queryText)
			.then(function(data){
				let result = {
					amMessagesWithFile: data.rows[0].count // get 276
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}

//180521
async function getUserAmountMessagesOfDay(userId){
	return new Promise ((resolve, reject) => {
		let queryText  = `SELECT count(*) FROM public.mggt_message WHERE msg_user_id = ${userId} and msg_date > (now() - interval '1 day');`;
		query(queryText)
			.then(function(data){
				let result = {
					mesOfDay: data.rows[0].count // get 276
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}

//180521
async function getUserAmountMessagesOfDayWithFile(userId){
	return new Promise ((resolve, reject) => {
		let queryText  = `SELECT count(*) FROM public.mggt_message WHERE msg_user_id = ${userId} and msg_date > (now() - interval '1 day')  and  msg_file IS NOT NULL;`;
		query(queryText)
			.then(function(data){
				let result = {
					mesOfDayFile: data.rows[0].count // get 276
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}

//180521
async function getUserAmountEvents(userId){
	return new Promise ((resolve, reject) => {
		let queryText  = `SELECT count(*) FROM public.mggt_recombination WHERE rec_send_id = ${userId} and  rec_status = 2;`;
		query(queryText)
			.then(function(data){
				let result = {
					userEvents: data.rows[0].count // get 276
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}
//210521
async function getUserActives(userId){
	return new Promise ((resolve, reject) => {
		let queryText  = `SELECT rec_id, rec_name, rec_descrip,rec_send_id, rec_status, rec_date,
(SELECT obj_name FROM public.mggt_objects WHERE obj_id = rec_obj_id) AS rec_obj_name, 
(SELECT user_fio FROM public.mggt_users WHERE user_id = rec_recip_id) AS rec_recip_fio, 
(SELECT user_post FROM public.mggt_users WHERE user_id = rec_recip_id) AS rec_recip_post, 
(SELECT user_fio FROM public.mggt_users WHERE user_id = rec_send_id) AS rec_send_fio ,
(SELECT user_post FROM public.mggt_users WHERE user_id = rec_send_id) AS rec_send_post
\t FROM public.mggt_recombination 
\t WHERE rec_send_id  = 228 OR rec_recip_id  = 228;`;
// \t WHERE rec_send_id  = ${userId}  ;`;
		query(queryText)
			.then(function(data){
				let result = {
					userActive: data.rows // get 276
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
		// console.log('resultAll',resultAll);


		res.send(resultAll);
	} catch (e){
		console.log(e);
	}
})

//API endpoint 180521
app.post('/query/user', cors(), async function(req, res){
	// console.log( 'Запрос /query/user/:userId  req.body',req.body.userId);
	const { userID } = req.body;
	try {
		let resUser = 		await getUserById(userID);
		let resUserAmObjs = await getUserAmountObjs(userID);
		let resUserAmAllMessages = await getUserAmountAllMessages(userID);
		let resUserAmMessagesWithFile = await getUserAmountMessagesWithFile(userID);
		let resUserAmMessagesOfDay = await getUserAmountMessagesOfDay(userID);
		let resUserAmMessagesOfDayWithFile = await getUserAmountMessagesOfDayWithFile(userID);
		let resUserEvents = await getUserAmountEvents(userID);
		let resUserActives = await getUserActives(userID);
		let result = {
			user: resUser.user || '',
			userAmObjs: resUserAmObjs.amObjs || 0,
			userAmAllMes: resUserAmAllMessages.amAllMessages || 0,
			userAmMesFile: resUserAmMessagesWithFile.amMessagesWithFile || 0,
			mesOfDay: resUserAmMessagesOfDay.mesOfDay || 0,
			mesOfDayFile: resUserAmMessagesOfDayWithFile.mesOfDayFile || 0,
			resUserEvents: resUserEvents.userEvents || 0,
			resUserActives: resUserActives.userActive || {},
		}
		// console.log('/query/user/:userId  result',result);


		res.send(result);
	} catch (e){
		console.log(e);
	}
})

// for objCard page 190521

//190521
async function getObjById(objId){
	return new Promise ((resolve, reject) => {
		let queryText  = `SELECT * FROM public.mggt_objects WHERE obj_id = ${objId};`; // good
		query(queryText)
			.then(function(data){
				let result = {
					obj: data.rows[0]
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}
app.post('/query/obj/data', cors(), async function(req, res){
	const { objId } = req.body;
	try {
		let resObj =  await getObjById(objId);
		let result = {
			objId: objId,
			objData: resObj.obj || {},
		}
		res.json(result);
	} catch (e){
		console.log('/query/obj/data',e);
	}
})

//190521
async function getBoundObjById(objId){
	return new Promise ((resolve, reject) => {
		let queryText  = `SELECT * FROM public.mggt_bounds WHERE bnd_obj_id = ${objId};`; // good
		query(queryText)
			.then(function(data){
				let result = {
					obj: data.rows[0]
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}
app.post('/query/obj/bound', cors(), async function(req, res){
	const { objId } = req.body;
	try {
		let resObjBound =  await getBoundObjById(objId);
		let result = {
			objId: objId,
			objBoundData: resObjBound.obj || {},
		}
		res.send(result);
	} catch (e){
		console.log('/query/obj/data',e);
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


const msk = proj4(def_msk).inverse([-3275.55278220851,-23936.9026103005]);// rec благовещенский - деревня Луковня, городской округ Подольск улетает
// const msk = proj4(def_msk).inverse([6138.0886328379,-11053.3608273561]);// rec благовещенский - старокачаловский улетает
// const msk = proj4(def_msk).inverse([-36795,7465519071],[19659,4970837786]);
// const msk = proj4(def_msk).inverse([2204.885946, -21782.821940]);
console.log('msk',msk);


//API endpoint 240521 Для Карточки пользователя Tab2 actives
async function getUserEventByRecId(recId){
	return new Promise ((resolve, reject) => {
		let queryText  = `SELECT * FROM public.mggt_recombination WHERE rec_id = ${recId};`;
		query(queryText)
			.then(function(data){
				let result = {
					userEvent: data.rows[0] // get 276
				}
				resolve(result);
			})
			.catch(function(err){console.log(err)});
	});
}

app.post('/query/rec/data', cors(), async function(req, res){
	const { recId } = req.body;
	try {
		let resUserEvent = 							await getUserEventByRecId(recId);
		let result = {
			userEvent: resUserEvent.userEvent || '',
		}
		res.send(result);
	} catch (e){
		console.log(' error - ',e);
	}
})


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


//const def_msk2 = '+proj=tmerc +lat_0=55.6666666667 +lon_0=37.5 +x_0=0 +y_0=0 +k_0=1. +a=6377397 +rf=299.15 +towgs84=396,165,557.7,-0.05,0.04,0.01,0 +no_defs';
// const def_wgs2 = '+proj=tmerc +lat_0=0 +lon_0=60.05 +k=1 +x_0=1500000 +y_0=-5911057.63 +ellps=krass +towgs84=24,-123,-94,-0.02,0.25,0.13,1.1 +units=m +no_defs';
//
// let def_wgs84 = "+proj=gnom +lat_0=90 +lon_0=0 +x_0=6300000 +y_0=6300000 +ellps=WGS84 +datum=WGS84 +units=m +no_defs";
// let wgs84_2 = "+proj=longlat +datum=WGS84 +no_defs ";
// const msk2 = '+proj=tmerc +ellps=bessel +towgs84=316.151,78.924,589.65,-1.57273,2.69209,2.34693,8.4507 +units=m +lon_0=37.5 +lat_0=55.66666666667 +k_0=1 +x_0=0 +y_0=0';
//
// firstProjection = 'PROJCS["NAD83 / Massachusetts Mainland",GEOGCS["NAD83",DATUM["North_American_Datum_1983",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],AUTHORITY["EPSG","6269"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.01745329251994328,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4269"]],UNIT["metre",1,AUTHORITY["EPSG","9001"]],PROJECTION["Lambert_Conformal_Conic_2SP"],PARAMETER["standard_parallel_1",42.68333333333333],PARAMETER["standard_parallel_2",41.71666666666667],PARAMETER["latitude_of_origin",41],PARAMETER["central_meridian",-71.5],PARAMETER["false_easting",200000],PARAMETER["false_northing",750000],AUTHORITY["EPSG","26986"],AXIS["X",EAST],AXIS["Y",NORTH]]';
//
// // const msk = proj4(msk2,def_wgs84 ,[2204.885946, -21782.821940]);
// // proj4(firstProjection).inverse([242075.00535055372, 750123.32090043]);


// const msk = proj4(def_msk).inverse([55.77876611979373, 37.51221102764416]); // MosGeoTrest