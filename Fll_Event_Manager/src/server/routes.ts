import * as express from 'express';
import { test } from './Tester'

const router = express.Router();
router.use(express.json());


//management variables
let match: number = 0;

let numTables: number = 4;

let tableStatus: boolean[] = new Array(4).fill(false);

function updateTableArray() {
    tableStatus = Array(numTables).fill(false);
}

let startTimer: boolean = false;


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
    } else if (num.localeCompare("+") == 0) {
        match++;
        res.json({
            match: match,
        });
    } else {
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


//setup number of tables
router.post('/api/tables/:num', (req, res) => {
    const { num } = req.params;
    console.log(num);
    if (!num) {
        res.status(418).send({ message: 'No table number!' })
    } else {
        numTables = parseInt(num);
        res.json({
            numTables: numTables,
        });
        updateTableArray();
    }
});

router.get('/api/tables', (req, res) => {
    res.status(200).send({
        numTables: numTables
    });
});

router.post('/api/tables/ready/:table', (req, res) => {
    const { table } = req.params;
    if (!table) {
        res.status(418).send({ message: 'No table number!' })
    } else {
        if (parseInt(table) < numTables) {
            console.log(table + " is ready");
            tableStatus[parseInt(table)] = true;
            res.status(200).send(table);
        } else {
            res.status(418).send({ message: 'Input out of bounds' })
        }

    }
});

router.post('/api/tables/notready/:table', (req, res) => {
    const { table } = req.params;

    if (!table) {
        res.status(418).send({ message: 'No table number!' })
    } if (table === "all") {
        updateTableArray();
        res.status(200).send("all");
    } else {
        if (parseInt(table) < numTables) {
            console.log(table + " is not ready");
            tableStatus[parseInt(table)] = false;
            res.status(200).send(table);
        } else {
            res.status(418).send({ message: 'Input out of bounds' })
        }
    }
});

router.get('/api/tables/status', (req, res) => {
    res.status(200).send({
        tables: tableStatus,
        numTables: numTables
    });
});


router.get('/api/timer/status', (req, res) => {
    res.status(200).send({
        startTimer: startTimer,
    });
});

router.post('/api/timer/start', (req, res) => {
    startTimer = true;
    res.json({
        startTimer: startTimer,
    });
});

router.post('/api/timer/stop', (req, res) => {
    startTimer = false;
    res.json({
        startTimer: startTimer,
    });
});



export default router;