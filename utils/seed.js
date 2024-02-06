const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomReaction, getRandonThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

})
