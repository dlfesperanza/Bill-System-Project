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
	const queryline="insert into bill values('" + req.body.billno +  "','"  + req.body.title +  "','"  + req.body.body +  "','"  + req.body.billtype +  "','"  + req.body.scope +   "','" + req.body.status + "','"  + req.body.reading +   "','"  + req.body.datefiled + "');" ;
	console.log(queryline);
	db.query(queryline,[],(err,result)=>{
		res.send(result);
	});
}

exports.deleteBills = (req, res, next) => {
	const queryline = "delete from bill where billno=" + req.body.billno + ";";
	console.log(queryline);
	db.query("delete from bill_author where billno="+req.body.billno+";", [], (err, res)=>{
	});
	db.query("delete from bill_subject where billno="+req.body.billno+";", [], (err, res)=>{
	});
	db.query(queryline, [], (err, result) => {
		res.send(result);
	});
};

exports.viewLegislators = (req, res, next) => {
	db.query('select * from legislator;', [], (err, result)=>{
		if (!err){
			res.send(result);
		}else{
			res.send(err);
		}
	})
}

exports.addLegislator = (req, res, next) => {
  const data = req.body
  console.log(data.fname+" "+data.mname+" "+data.lname);

  const queryline = "call addLegislator(?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(queryline, [data.fname, data.mname, data.lname, data.bday, data.sex, data.type, 1000, data.noofterms, data.termstart], (err, result) => {
    if(!err){
      res.send(err);
    }else{
      res.send(err)
    }
  })
}


exports.viewBill_by_billno = (req, res, next) => {
	const bill_no = req.query.billno;

	const queryline = 'select * from bill where billno=' + req.query.billno + ";";
	console.log(queryline);
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

exports.viewBills_by_type_name = (req, res, next) => {
	const fname = req.query.fname;
	const lname = req.query.lname;
	const type = '%'+req.query.type+'%';
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
	queryline = queryline+op+" lname=?) c where a.billtype like ? and a.billno=b.billno and b.empid=c.empid;";

	db.query(queryline, [fname, lname, type], (err, result) => {
		if (!err){
			res.send(result);
		}else{
			res.send(err);
		}
	})
}

// exports.viewSenateBill_by_Senator = (req, res, next) => {
// 	const fname = req.query.fname;
// 	const lname = req.query.lname;
// 	var op;
// 	if (fname == null){
// 		op = "or";
// 	}else if(lname == null) {
// 		op = "or";
// 	}else{
// 		op = "and";
// 	}
// 	console.log(fname + lname);
// 	var queryline = "select a.* from bill a, bill_author b, (select empid from legislator where fname=? ";
// 	queryline = queryline+op+" lname=?) c where a.billtype='SENATE BILL' and a.billno=b.billno and b.empid=c.empid;";

// 	db.query(queryline, [fname, lname], (err, result) => {
// 		if (!err){
// 			res.send(result);
// 		}else{
// 			res.send(err);
// 		}
// 	})
// }
// exports.viewHouseBill_by_HouseMember = (req, res, next)=>{
// 	const fname = req.query.fname;
// 	const lname = req.query.lname;
// 	var op;
// 	if (fname == null){
// 		op = "or";
// 	}else if(lname == null) {
// 		op = "or";
// 	}else{
// 		op = "and";
// 	}
// 	var queryline = "select a.* from bill a, bill_author b, (select empid from legislator where fname=? ";
// 	queryline = queryline+op+" lname=?) c where a.billtype='HOUSE BILL' and a.billno=b.billno and b.empid=c.empid;";

// 	db.query(queryline, [fname, lname], (err, result) => {
// 		if (!err){
// 			res.send(result);
// 		}else{
// 			res.send(err);
// 		}
// 	})
// }
