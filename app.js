const http = require('http')

http 
    .createServer((req, res) => {
        res.write('hello tod');
        res.end();
    })

    .listen(3000, () => {
        console.log('server jalan tod')
    })