var mysql = require('mysql');
var config = require('./config');
var pool = mysql.createPool({
    // 连线限制数 取决于硬件
    connectionLimit: 10,
    // 结构
    ...config
});
// 没有了连接和关闭，从而提升数据库的操作速度
// pool.query('SELECT * FROM students', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });
const db = (sql, params, callback) => {
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
        // Use the connection
        connection.query(sql, [{
            ...params
        }], function (error, results, fields) {
            // When done with the connection, release it.
            callback(results);
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}

module.exports = db;
