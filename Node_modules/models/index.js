//task 1.
const fs = require('fs');
const db = fs.readdirSync('./models/').filter(e => (e.endsWith('.js') && !(e.startsWith('.') || e === 'index.js')));
module.exports = db;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
//task 2.
const bcrypt = require('bcrypt');

