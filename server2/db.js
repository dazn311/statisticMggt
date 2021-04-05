const pgp = require('pg-promise')();
const db = pgp("postgres://mggt_alex:79y7BdJFtmqJVtJn@176.53.160.74:5432/test_polygon_2");
// const db = pgp("postgres://dazn311:postgress@localhost:5432/dazn311");

module.exports = db;
 
// ver.2

// const Pool = require('pg').Pool;  


// const pool = new Pool({
//     user: "dazn311",
//     password: "root",
//     host: "localhost",
//     port: "5432",
//     database: "dazn311"

// });

// module.exports = pool;

