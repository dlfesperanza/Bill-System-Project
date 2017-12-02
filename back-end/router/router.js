'use strict';

const bill = require(__dirname + '/../controllers/BillController');
const leggy = require('../controller/LegislatorController');

module.exports = (router) => {

	router.post('/add-legislator', leggy.addLegislator);
	router.post('/add-bill', bill.adBill);

	router.get('/bills', bill.viewBills);													//working
	router.get('/bills_on', bill.viewBills_by_year);							//working ... /bills_on?year=<year>
	router.get('/bill', bill.viewBill_by_billno);									//working ... /bill?billno=<billno>
	router.get('/senatebill', bill.viewSenateBill_by_Senator);		//working ... /senatebill?fname=<senator.fname>&lname=<senator.lname>
	router.get('/housebill', bill.viewHouseBill_by_HouseMember);	//working ... /housebill?fname=<fname>&lname=<lname>

	router.get('/legislators', leggy.viewLegislators);   					//working

	router.get('*', (req, res)=>{res.send('fuck you')})	//catcher

	return router;
};
