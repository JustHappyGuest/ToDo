const path = require('path');
const fs = require('fs');
const mime = require('mime');

const sentPage = (distRoot, res) => {
  const filepath = path.join(distRoot, 'index.html');

  const stream = fs.createReadStream(filepath);

  stream.on('open', () => {
    res.setHeader('Content-Type', mime.getType(filepath));
  });

  stream.on("error", err => {
    console.log(`Page is not found! Error code: ${err.code}`)
    if(err.code){
      res.statusCode = 404;
      res.end('Page is not found!');
    }else{
      res.statusCode = 500;
      res.end('Unknow eror!');
    }
  });

  stream.pipe(res);
}

module.exports = sentPage;
