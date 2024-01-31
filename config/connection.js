const {connect, connection} = require('mongoose');
const connectionString = 'mongodb://127.0.0.1:27017/social-network';

connect(connectionString);
//console.log('connected to mongo')
module.exports = connection; 
