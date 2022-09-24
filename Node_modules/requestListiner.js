const fs = require('fs');

module.exports = async function requestListener(req, res) {
        
    const indexContent = await fs.readFileSync('./index.html', "utf8");

    res.end(indexContent)
}
