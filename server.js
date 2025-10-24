require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


//save to db
app.post('/addNewToDo', async (req, res) => {
    const d = req.body;
    try {
        const result = await pool.query('INSERT INTO tasks VALUES(DEFAULT, $1, FALSE)',
            [d.todoName]);
        // res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
    res.send('ok' + '<a href="/index.html" class="back">back</a>')
});

app.get('/tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks');
        console.log("!!!!!!!!!")
        console.log(result);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.post('/removeQuestion', async (req, res) => {
    const answers = req.body;
    console.log(req.body)
    //запрос в базу
    try {
        const result = await pool.query("UPDATE tasks SET is_removed = true WHERE task_id = $1", [req.body.taskId]);
        console.log(result)
    } catch (err) {
        res.status(500).send('Database error');
    }
    res.json({status: 'success'});
})

app.post('/markQuestion', async (req, res) => {
    const answers = req.body;
    console.log(req.body)
    //запрос в базу
    try {
        const result = await pool.query("UPDATE tasks SET task_done = true WHERE task_id = $1", [req.body.taskId]);
        console.log(result)
    } catch (err) {
        res.status(500).send('Database error');
    }
    res.json({status: 'success'});
})


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});



