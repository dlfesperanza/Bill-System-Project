'use strict';

const bill = require(__dirname + '/../controllers/controller');

module.exports = (router) => {

	router.get('/bills', bill.viewBills);
	router.post('/addBills', bill.addBills);
	router.post('/deleteBills', bill.deleteBills);
	router.get('/bills_on', bill.viewBills_by_year);							//working ... /bills_on?year=<year>
	router.get('/viewBill', bill.viewBill_by_billno);									//working ... /bill?billno=<billno>
	router.get('/senatebill', bill.viewSenateBill_by_Senator);		//working ... /senatebill?fname=<senator.fname>&lname=<senator.lname>
	router.get('/housebill', bill.viewHouseBill_by_HouseMember);	//working ... /housebill?fname=<fname>&lname=<lname> 					//working

	router.get('*', (req, res)=>{res.send('aaaaaaaaa')})	//catcher

	return router;
};