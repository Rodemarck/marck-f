import * as mysql from 'promise-mysql'


const connect =  async () => {
    return await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DB
    })
}

export {connect}