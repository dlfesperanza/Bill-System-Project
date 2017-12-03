'use strict';

const bill = require(__dirname + '/../controllers/controller');

module.exports = (router) => {

	router.get('/bills', bill.viewBills);
	router.post('/addBills', bill.addBills);
	router.post('/deleteBills', bill.deleteBills);
	router.get('/viewBillByYear', bill.viewBills_by_year);							//working ... /bills_on?year=<year>
	router.get('/viewBillByBillno', bill.viewBill_by_billno);									//working ... /bill?billno=<billno>
	router.get('/viewBillByReading', bill.viewBill_by_reading);
	router.get('/viewBillByType', bill.viewBills_by_type_name);
	router.get('/viewBillByBillType', bill.viewBill_by_billtype);
	router.post('/editBill', bill.editBill);
	
	router.post('/addLegislator', bill.addLegislator);
	router.get('/searchLegislator', bill.searchLegislator);
	router.get('*', (req, res)=>{res.send('aaaaaaaaa')})	//catcher

	return router;
};