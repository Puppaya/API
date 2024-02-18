import mysql, { ConnectionOptions } from "mysql2";

const ConnectionConfig: ConnectionOptions = {
    host: 'thsv61.hostatom.com',
    user: 'bluesis_test',
    password: '@Ss_12345678',
    database: 'test',
};

const connection =mysql.createConnection(ConnectionConfig)

connection.connect((error:Error | unknown)=>{
    if(error){
        console.error("Error connecting to MySQL database: ", error)
    }else{
        console.log('Connected to MySQL database!')
    }
})

export default connection