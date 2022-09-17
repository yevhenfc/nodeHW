const q = '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - '
// Task 1.
const db = require('./models/');
console.log(q);
console.log('Task 1');
console.log(q);
console.log(db);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Task 2.
const users = require('./seed-users');
console.log(q);
console.log('Task 2');
console.log(q);
console.log(users);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Task 3.
const http = require ('http');
const requestListener = require ('./requestListiner.js');
const PORT = 3000;
const server = http.createServer(requestListener);
server.listen(PORT);
console.log(q);
console.log('Task 3. Look ./requests/postIndex.http');
console.log(q);
