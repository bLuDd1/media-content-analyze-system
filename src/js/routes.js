'use strict';

const { Router } = require('express');
const pool = require('../js/pool');

const router = Router();

const sql = {
    getTaskById: `SELECT * FROM task WHERE id = ?`,
    getAllTasks: `SELECT * FROM task`,
    getTaskByDate: `SELECT * FROM task WHERE createdAt = ?`,
    createNewTask: `INSERT INTO task(id, name, description, createdAt, updatedAt, state, schedule, source_id, scraper_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    updateTask: `UPDATE task SET name = ?, description = ?, updatedAt = ?, state = ?, schedule = ? WHERE id = ?`,
    deleteTask: `DELETE FROM task WHERE id = ?`
};

router.get('/task', (req, res) => {
    pool.query(sql.getAllTasks, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Error on server!',
            });
        }
        res.send(result)
    })
})
    .post('/task', (req, res) => {
        return res.status(403).json({
            message: 'Cannot POST on /task/.'
        })
    })
    .put('/task', (req, res) => {
        return res.status(403).json({
            message: 'Cannot PUT on /task/.'
        })
    })
    .delete('/task', (req, res) => {
        return res.status(403).json({
            message: 'Cannot DELETE on /task/.'
        })
    })

    .get('/task/:id', (req, res) => {
        const id = req.params.id;
        pool.query(sql.getTaskById, id, (err, [result]) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error on server!'
                });
            }
            if (!result) {
                return res.status(404).json({
                    message: 'No tasks with this id!'
                });
            }
            res.send(result)
        })
    })

    .get('/task/date/:createdAt', (req, res) => {
        const dateTime = req.params.createdAt;
        pool.query(sql.getTaskByDate, dateTime, (err, [result]) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error on server!'
                });
            }
            if (!result) {
                return res.status(404).json({
                    message: 'No tasks with this date!'
                });
            }
            res.send(result)
        })
    })

    .post('/task/:id', (req, res) => {
        const { name, description, createdAt, updatedAt, state, schedule, source_id, scraper_id } = req.body;
        if (!(name && description && createdAt && updatedAt && state && schedule && source_id && scraper_id)) {
            res.status(400).json({
                message: 'All fields must have value!'
            });
            return
        }
        const id = req.params.id;
        pool.query(sql.createNewTask, [ id, name, description, createdAt, updatedAt, state, schedule, source_id, scraper_id ], (err) => {
            if (err) {
                return res.status(500).json({
                    message: 'Server error!',
                });
            }
            res.send(`Task with id: ${id} was created!`)
        })
    })

    .put('/task/:id', (req, res) => {
        const  { name, description, updatedAt, state, schedule } = req.body;
        const id = req.params.id;
        const sqlStatement = pool.format(sql.updateTask, [ name, description, updatedAt, state, schedule, id]);
        pool.execute(sqlStatement, (err, result) => {
            if (err || !result.affectedRows) {
                return res.status(500).json({
                    message: 'Error on server! Or check id!'
                });
            }
            res.send(result);
        })
    })

    .delete('/task/:id', (req, res) => {
        const id = req.params.id;
        pool.query(sql.deleteTask, id, (err, result) => {
            if (err || !result.affectedRows) {
                return res.status(500).json({
                    message: 'Error on server! Or check id!'
                });
            }
            res.send(`Task with id: ${id} was deleted`);
        })
    })

module.exports = router;