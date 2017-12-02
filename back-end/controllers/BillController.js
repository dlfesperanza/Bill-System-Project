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


exports.viewBills = (req, res, next) => {
	const queryline = 'select * from bill';
	db.query(queryline, [], (err, result) => {
		res.send(result);
	});
};

exports.viewBill_by_billno = (req, res, next) => {
	const bill_no = req.query.billno;
	const queryline = 'select * from bill where billno=?';
	db.query(queryline, [bill_no], (err, result) => {
		if (!err) {
			res.send(result);
		}else{
			res.send(err);
		}
	})
}
exports.viewBills_by_year = (req, res, next) => {
	const yr = req.query.year;
	const queryline = 'select * from bill where year(datefiled)=?';
	db.query(queryline, [yr], (err, result) => {
		if (!err) {
			res.send(result);
		}else{
			res.send(err);
		}
	})
}
exports.viewSenateBill_by_Senator = (req, res, next) => {
	const fname = req.query.fname;
	const lname = req.query.lname;
	var op;
	if (fname == null){
		op = "or";
	}else if(lname == null) {
		op = "or";
	}else{
		op = "and";
	}
	console.log(fname + lname);
	var queryline = "select a.* from bill a, bill_author b, (select empid from legislator where fname=? ";
	queryline = queryline+op+" lname=?) c where a.billtype='SENATE BILL' and a.billno=b.billno and b.empid=c.empid;";

	db.query(queryline, [fname, lname], (err, result) => {
		if (!err){
			res.send(result);
		}else{
			res.send(err);
		}
	})
}
exports.viewHouseBill_by_HouseMember = (req, res, next)=>{
	const fname = req.query.fname;
	const lname = req.query.lname;
	var op;
	if (fname == null){
		op = "or";
	}else if(lname == null) {
		op = "or";
	}else{
		op = "and";
	}
	var queryline = "select a.* from bill a, bill_author b, (select empid from legislator where fname=? ";
	queryline = queryline+op+" lname=?) c where a.billtype='HOUSE BILL' and a.billno=b.billno and b.empid=c.empid;";

	db.query(queryline, [fname, lname], (err, result) => {
		if (!err){
			res.send(result);
		}else{
			res.send(err);
		}
	})
}
