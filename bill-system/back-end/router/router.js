'use strict';

const bill = require(__dirname + '/../controllers/controller');

module.exports = (router) => {

	router.get('/bills', bill.viewBills);

	return router;
};