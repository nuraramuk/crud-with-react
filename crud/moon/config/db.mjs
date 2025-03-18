import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()


// DataBase
const pool = mysql.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER ,
    password : process.env.DB_PASSWORD ,
    database : process.env.DB_NAME,
    waitForConnections : true ,
    connectionLimit : 10 ,
    queueLimit : 0
})

pool.getConnection((err , connection)=>{
    if(err){
        console.error("Errorn connect to the Database");
        process.exit(1)
        
    }else{
        console.log("Successfully to connect database");
        connection.release()
    }
})

export default pool