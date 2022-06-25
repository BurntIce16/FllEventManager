import * as express from 'express';
import apiRouter from './routes';
//import getIpAddress from 'local-ipv4-address';

async function serverStart() {

    const app = express();

    app.use(express.static('public'));
    app.use(apiRouter);

    const port = Number.parseInt(process.env.PORT || "3000");

    //const ipAddress = await getIpAddress();
    app.listen(port, '0.0.0.0');
}
serverStart();