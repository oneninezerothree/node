const {
    MongoClient,
    ObjectId
} = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = '1903';
// Use connect method to connect to the server
// 异步 回调金字塔，回调地狱

// 执行连接
const connect = (col) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, client) {
            const db = client.db(dbName);
            const collection = db.collection(col);
            if (err) {
                reject(err)
            } else {
                resolve({
                    collection,
                    client
                });
            }

        });
    })
}

const find = (col, params) => {
    return new Promise(async (resolve, reject) => {
        const {
            collection,
            client
        } = await connect(col)
        // Find some documents
        collection.find({
            ...params
        }).toArray(function (err, docs) {
            if (err) {
                reject(err)
            } else {
                resolve(docs)
            }
        });
        // 关闭
        client.close();
    })
}

module.exports = {
    connect,
    find,
    ObjectId
}