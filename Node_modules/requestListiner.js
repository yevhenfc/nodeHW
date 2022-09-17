const fs = require('fs');

module.exports = requestListener = (req, res) => {
        
    const indexContent = fs.readFileSync('./index.html', "utf8");

    res.end(indexContent)
}
