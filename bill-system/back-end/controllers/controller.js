'use strict';

const db = require(__dirname + '/../lib/mysql');

exports.post_people = (req, res, next) => {
	const data = {
		name: req.body.data.name,
		details: req.body.data.detail
	};
	const query_string = 'INSERT INTO people (name, details) VALUES (?, ?)';

	db.query(query_string, [req.body.data.name, req.body.data.detail], (err, result) => {
		res.send(result);
	});
};

exports.get_people = (req, res, next) => {
	const data = {
		name: req.query.name
	};
	
	db.query('SELECT * FROM people where name = ?', [data.name], (err, result) => {
		res.send(result);
	});
};

exports.viewBills = (req, res, next) => {
	const queryline = 'select * from bill';
	db.query(queryline, [], (err, result) => {
		res.send(result);
	});
};

exports.put_people = (req, res, next) => {
	res.send('This is a PUT');
};

exports.delete_people = (req, res, next) => {
	res.send('This is a DELETE');
};