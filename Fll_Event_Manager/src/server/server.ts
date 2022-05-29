import * as express from 'express';
import apiRouter from './routes';
import * as IpAddress from 'ip-address';

const app = express();

app.use(express.static('public'));
app.use(apiRouter);

var ip:string;

const port = process.env.PORT || 3000;
var localIpV4Address = require("local-ipv4-address");

localIpV4Address().then(function(ipAddress){
    console.log("Server Running at " + ipAddress + ":" + port);
    // My IP address is 10.4.4.137
    ip = ipAddress;
}).then(app.listen(port));

