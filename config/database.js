/**
 * Created by Anastasiia Kostiv on 09.02.2019.
 */

const crypto = require('crypto').randomBytes(256).toString('hex');

// Export config object
module.exports = {
   // uri: 'mongodb://localhost:27017/radio-LAG',
    uri: 'mongodb://a_kostiv:HSFl4jn5lDezGicf@radiolag-shard-00-00-fbabh.mongodb.net:27017,radiolag-shard-00-01-fbabh.mongodb.net:27017,radiolag-shard-00-02-fbabh.mongodb.net:27017/test?ssl=true&replicaSet=radioLAG-shard-0&authSource=admin&retryWrites=true',
    secret: crypto,
    db: 'radio-LAG'
}