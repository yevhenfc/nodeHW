const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

module.exports = async function requestListener(req, res) {
    try {
        const indexContent = await readFile('./index.html', "utf8");
        res.end(indexContent)
    }  
    catch (err) {console.log('Error', err)};     
}
