require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const app = express();
app.use(express.json());

//save to db
app.post('/addNewToDo', async (req, res) => {
    const d = req.body;
    try {
        const result = await pool.query('INSERT INTO tasks VALUES(DEFAULT, $1)',
            [d.li]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.get('/tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});



