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
    db.query(queryline, [], (err, result) => {
        res.send(result);
    });
};

exports.viewBill_by_billno = (req, res, next) => {
	const bill_no = req.query.billno;

	const queryline = 'select * from bill where billno=' + req.query.billno + ";";
	console.log(queryline);
	db.query(queryline, [bill_no], (err, result) => {
		if (!err) {
			res.send(result);
		}else{
      res.send(err)
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
      res.send(err)
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
	var queryline = "select a.* from bill a, bill_author b, (select empid from legislator where fname=? ";
	queryline = queryline+op+" lname=?) c where a.billtype like ? and a.billno=b.billno and b.empid=c.empid;";

	db.query(queryline, [fname, lname, type], (err, result) => {
		if (!err){
			res.send(result);
		}else{
      res.send(err)
    }
	})
}

exports.viewBills_by_status = (req, res, next)=>{
	const status = req.query.status;
	const reading = req.query.reading;
	const type = '%'+req.query.type+'%'
	const queryline = "select * from bill where billtype like ? and reading=? and status=?;"
	db.query(queryline, [type, reading, status], (err, result) => {
		if (!err){
			res.send(result);
		}else{
      res.send(err)
    }
	})
}

exports.viewLegislators = (req, res, next) => {
	db.query('select * from legislator;', [], (err, result)=>{
		if (!err){
			res.send(result);
		}else{
			res.send(err);
		}
	})
}

exports.searchLegislator = (req, res) => {
	const f_name = req.query.fname;
	const l_name = req.query.lname;
	const emp_id = req.query.empid;
	const type_ = req.query.type;

	//empid has highest priority
	//if empid is given ignore other fields and columns
	var queryline = "select * from legislator where "
	if (emp_id != null){
		queryline += 'empid=' + emp_id;
	}else{
		if (f_name != null){
			queryline += "fname like " + "'%" + f_name + "%'";
		}if (l_name != null){
			if (queryline != "select * from legislator where "){
				queryline += " and ";
			}queryline += "lname like " + "'%" + l_name + "%'";
		}if (type_ != null){
			if (queryline != "select * from legislator where "){
				queryline += ' and ';
			}queryline += 'type like ' + "'" + type_ + "'";
		}
	}
	queryline += ";";

	db.query(queryline, [], (err, result) => {
		if (!err){
			res.send(result);
		}else{
			res.send(false);
		}
	});
	console.log("search function")
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

exports.editLegislator = (req, res, next) => {
    const empid = req.body.empid;
    const fname = req.body.fname;
    const mname = req.body.mname;
    const lname = req.body.lname;
    const type = req.body.type;
    const sal = req.body.sal;

    var queryline = "update legislator set ";

    if (fname != ""){
        queryline += "fname="+"'"+fname+"'";
    }if (mname != ""){
        if (queryline != "update legislator set "){
            queryline += ", ";
        }queryline += "mname="+"'"+mname+"'";
    }if (lname != ""){
        if (queryline != "update legislator set "){
            queryline += ", ";
        }queryline += "lname="+"'"+lname+"'";
    }if (type != ""){
        if (queryline != "update legislator set "){
            queryline += ", ";
        }queryline += "type="+"'"+type+"'";
    }if (sal != 0){
        if (queryline != "update legislator set "){
            queryline += ", ";
        }queryline += "sal="+sal;
    }
    queryline += " where empid="+empid+";";

    db.query(queryline, [], (err, result) => {
        if (!err){
            res.send(result);
        }else{
            res.send(err);
        }
    })
}
