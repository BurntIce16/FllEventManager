import * as express from 'express';
import { test } from './Tester'

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    //you can call methods here from a url request


    //res = return
    res.json('World');
});

router.get('/api/test', (req, res, next) => {
    //you can call methods here from a url request
    test();
    res.end();
});


export default router;