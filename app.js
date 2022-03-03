
const http = require('http');
const fs = require('fs');

const serper = 3000;

// function panggilCSS(req, res){
//     if (req.url === '/style.css') {
//         res.writeHead(200,{
//             'Content-Type' : 'text/css'
//         });
//         const fileContents = fs.readFileSync('/style.css', {encoding:'utf8'});
//         res.write(fileContents);
//         res.end();
//     }
// }

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404)
        } else {
            res.write(data);
        }
        res.end();
    })
}

http 
    .createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type':'text/html',
        });
        //res.write('hello tod');
        const url = req.url;

        switch(url){
            case '/':
                renderHTML('./index.html', res);
                break;
            case '/about':
                renderHTML('./about.html', res);
                break;
            case '/form':
                renderHTML('./form.html', res);
                break;
            default:
                renderHTML('./home.html', res)
                break;
        }
    })

    .listen(serper, () => {
        console.log('server jalan bangg')
    })