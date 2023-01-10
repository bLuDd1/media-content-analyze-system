# Реалізація інформаційного та програмного забезпечення

В рамках проєкту розробляється:
## SQL-скрипт для створення та початкового наповнення бази даних
```sql
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` TEXT NOT NULL,
  `name` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`source`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`source` ;

CREATE TABLE IF NOT EXISTS `mydb`.`source` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(45) NOT NULL,
  `key` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`scraper`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scraper` ;

CREATE TABLE IF NOT EXISTS `mydb`.`scraper` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`task` ;

CREATE TABLE IF NOT EXISTS `mydb`.`task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `state` TEXT NOT NULL,
  `schedule` TEXT NOT NULL,
  `source_id` INT NOT NULL,
  `scraper_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_task_source1_idx` (`source_id` ASC) VISIBLE,
  INDEX `fk_task_scraper1_idx` (`scraper_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_source1`
    FOREIGN KEY (`source_id`)
    REFERENCES `mydb`.`source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_task_scraper1`
    FOREIGN KEY (`scraper_id`)
    REFERENCES `mydb`.`scraper` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` TEXT NOT NULL,
  `name` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`access` ;

CREATE TABLE IF NOT EXISTS `mydb`.`access` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_task1_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_access_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_access_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `mydb`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`scrapeInstance`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scrapeInstance` ;

CREATE TABLE IF NOT EXISTS `mydb`.`scrapeInstance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` TEXT NOT NULL,
  `flag` VARCHAR(45) NOT NULL,
  `scraper_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_scrapeInstance_scraper1_idx` (`scraper_id` ASC) VISIBLE,
  CONSTRAINT `fk_scrapeInstance_scraper1`
    FOREIGN KEY (`scraper_id`)
    REFERENCES `mydb`.`scraper` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`result` ;

CREATE TABLE IF NOT EXISTS `mydb`.`result` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `task_id` INT NOT NULL,
  `scrapeInstance_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_result_task1_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_result_scrapeInstance1_idx` (`scrapeInstance_id` ASC) VISIBLE,
  CONSTRAINT `fk_result_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `mydb`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_result_scrapeInstance1`
    FOREIGN KEY (`scrapeInstance_id`)
    REFERENCES `mydb`.`scrapeInstance` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`message`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`message` ;

CREATE TABLE IF NOT EXISTS `mydb`.`message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` TEXT NOT NULL,
  `result_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_message_result1_idx` (`result_id` ASC) VISIBLE,
  CONSTRAINT `fk_message_result1`
    FOREIGN KEY (`result_id`)
    REFERENCES `mydb`.`result` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`metadata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`metadata` ;

CREATE TABLE IF NOT EXISTS `mydb`.`metadata` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `key` INT NOT NULL,
  `value` TEXT NOT NULL,
  `message_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_metadata_message1_idx` (`message_id` ASC) VISIBLE,
  CONSTRAINT `fk_metadata_message1`
    FOREIGN KEY (`message_id`)
    REFERENCES `mydb`.`message` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`source`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`source` (`id`, `url`, `key`) VALUES (DEFAULT, 'https://tsn.ua', 231);
INSERT INTO `mydb`.`source` (`id`, `url`, `key`) VALUES (DEFAULT, 'https://radio.nv.ua', 34);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`role` (`id`, `name`, `description`) VALUES (DEFAULT, 'user', 'User');
INSERT INTO `mydb`.`role` (`id`, `name`, `description`) VALUES (DEFAULT, 'admin', 'Administrator');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`user` (`id`, `login`, `name`, `password`) VALUES (DEFAULT, 'artem12333', 'Artem', 'qwertui');
INSERT INTO `mydb`.`user` (`id`, `login`, `name`, `password`) VALUES (DEFAULT, 'omega', 'Omega', 'onion86');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`scraper`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`scraper` (`id`, `type`) VALUES (DEFAULT, 'answer');
INSERT INTO `mydb`.`scraper` (`id`, `type`) VALUES (DEFAULT, 'request');
```

## RESTfull сервіс для управління даними

### Файл серверу server.js

```
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = require('../js/routes');
const pool = require('../js/pool');

const port = 8080;
const app = express();
pool.connect();

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/db', router);

app.listen(8080, () => {
    console.log(`Server starts on http://localhost:${port}`);
});
```

### Файл підключення до бази даних pool.js

```
'use strict';

const mysql = require('mysql2');

const connectionOptions = {
    host: "localhost",
    user: "root",
    password: "razer228228",
    database: "mydb",
};

const pool = mysql.createConnection(connectionOptions);

module.exports = pool;
```

### Файл контролеру routes.js

```
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
        pool.query(sql.getTaskByDate, dateTime, (err, result) => {
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
```

