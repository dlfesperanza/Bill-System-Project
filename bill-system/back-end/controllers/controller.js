'use strict';

const db = require(__dirname + '/../lib/mysql');

exports.viewBills = (req, res, next) => {
	const queryline = 'select * from bill';
	console.log(queryline);
	db.query(queryline, [], (err, result) => {
		res.send(result);
	});
};

exports.addBills=(req,res,next)=>{
	const queryline='insert into bill values(' + req.body.billno +  "','"  + req.body.title +  "','"  + req.body.body +  "','"  + req.body.billtype +  "','"  + req.body.scope +   "','" + req.body.status +   "','"  + req.body.subject +   "','"  + req.body.reading +   "','"  + req.body.datefiled +   "','"  + req.body.empid +  "')" ;
	console.log(queryline);
	db.query(queryline,[],(err,result)=>{
		res.send(result);
	});
}