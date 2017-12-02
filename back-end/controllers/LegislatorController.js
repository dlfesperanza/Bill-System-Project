'use strict';

const db = require(__dirname + '/../lib/mysql');

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
  const data = req.body.data
  console.log(data.fname+" "+data.mname+" "+data.lname);

  const queryline = "addLegislator(?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(queryline, [data......], (err, result) => {
    if(!err){
      res.send(result);
    }else{
      res.send(err)
    }
  })
}
