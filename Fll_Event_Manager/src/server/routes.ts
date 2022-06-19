import * as express from 'express';
import { test } from './Tester'

const router = express.Router();
router.use(express.json());


//management variables
let match: number = 0; 


//example get
//req = incoming date
//res = response / outgoing data
router.get('/api/test', (req, res) => {
    res.status(200).send({
        test: 'Hello World!'
    });
    test();
});

//example post

router.post('/api/test/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;
    if (!logo) {
        res.status(418).send({ message: 'No logo!' })
    } else {
        res.json({
            temp: `Hello ${logo}, id ${id}`,
        });
    }
});


//match info
//set match number
router.post('/api/match/:num', (req, res) => {
    const { num } = req.params;
    console.log(num);
    if (!num) {
        res.status(418).send({ message: 'No match number!' })
    } else if(num.localeCompare("+") == 0){
        match++;
        res.json({
            match: match,
        });
    }else{
        match = parseInt(num);
        res.json({
            match: match,
        });
    }
});

router.get('/api/match', (req, res) => {
    res.status(200).send({
        match: match
    });
});



export default router;