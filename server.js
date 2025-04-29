import { error } from 'console';
import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'


var __filename = url.fileURLToPath(import.meta.filename)
var __dirname = path.dirname(__filename)

console.log(__filename,__dirname)
var PORT = 8080;



    var server = http.createServer(async(req,res)=>{
    try{
        if (req.method === 'GET'){
            let filePath;

            if(req.url == '/'){
                filePath = path.join(__dirname, 'index.html')
        
            } else{
                res.writeHead(404, {'content-type':'text/html'})
                res.end('PAGE NOT FOUND')
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html')
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allowed!')
        }
    } catch (error) {
        console.log("Server ERROR")
    }
        
    })
    
    server.listen(PORT, ()=>{
        console.log(`server is started on : http://localhost:${PORT}`)
    })



