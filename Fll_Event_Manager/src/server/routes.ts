import * as express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    //you can call methods here from a url request


    //res = return
    res.json('2');
});

export default router;