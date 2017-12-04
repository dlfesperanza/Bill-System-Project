'use strict';

const bill = require(__dirname + '/../controllers/controller');

module.exports = (router) => {

	router.get('/bills', bill.viewBills);
	router.post('/addBills', bill.addBills);
	router.post('/deleteBills', bill.deleteBills);
	router.get('/viewBillByReading', bill.viewBills_by_status)
	router.get('/viewBillByYear', bill.viewBills_by_year);							//working ... /bills_on?year=<year>
	router.get('/viewBill', bill.viewBill_by_billno);									//working ... /bill?billno=<billno>
	router.get('/bill_by', bill.viewBills_by_type_name);		//working ... /senatebill?fname=<senator.fname>&lname=<senator.lname>

	router.post('/addLegislator', bill.addLegislator);
	router.post('/editLegislator', bill.editLegislator);
	router.get('/searchLegislator', bill.searchLegislator);
	router.get('/legislators', bill.viewLegislators);

	router.get('*', (req, res)=>{res.send('aaaaaaaaa')})	//catcher

	return router;
};
