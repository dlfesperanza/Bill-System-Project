insert into `legislator`
	values(1, 'AQUILINO KIKO', 'L', 'PIMENTEL III', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(2, 'SERGIO', 'R', 'OSMENA', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(3, 'MIRIAM', 'DEFENSOR', 'SANTIAGO', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(4, 'LOREN', 'B', 'LEGARDA', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(5, 'JINGGOY', 'P', 'EJERCITO-ESTRADA', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(6, 'TEOFISTO', '', 'GUINGONA III', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(7, 'RAMON', 'A', 'REVILLA JR.', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(8, 'FRANCIS', 'G', 'ESCUDERO', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(9, 'PIA', 'S', 'CAYETANO', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(10, 'JUAN EDGARDO', 'M', 'ANGARA', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(11, 'JOSEPH VICTOR', 'G', 'EJERCITO', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(12, 'ANTONIO', 'F', 'TRILLANES', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(13, 'GRACE', 'L', 'POE', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(14, 'MARIA LOURDES NANCY', 'S', 'Binay', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(15, 'MANUEL', 'M', 'LAPID', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));
insert into `legislator`
	values(16, 'PAOLO BENIGNO', '', 'AQUINO', str_to_date('12-13-1943', '%c-%d-%Y'), 'M', 'SENATOR', 15000, 3, str_to_date('08-01-2016', '%c-%d-%Y'), str_to_date('08-01-2019', '%c-%d-%Y'));

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

insert into `bill`
	values(3220, 'TAX AND DUTIES EXEMPTIONS THE PRIZES OF MISS UNIVERSE PIA WURTZBACH',
		'AN ACT EXEMPTING FROM INCOME TAX, VALUE-ADDED TAX, AND IMPORT DUTIES THE WINNINGS AND/OR PRIZES OF MISS PIA ALONZO WURTZBACH AS MISS UNIVERSE 2015, AND FROM DONOR\'S TAX ANY DONATION MADE BY HER FROM SUCH WINNINGS AND/OR PRIZES',
		'SENATE BILL', 'NATIONAL', 'ARCHIVED', null, str_to_date('2016-02-03', '%Y-%c-%d'));
	insert into `bill_author` values(3220, 1);
	insert into `bill_subject` values(3220, 'VALUE-ADDED TAX');
	insert into `bill_subject` values(3220, 'TAX EXEMPTON');

insert into `bill`
	values(3221, 'ORGAN AND TISSUE DONATION ACT OF 2016',
		'AN ACT STRENGTHENING THE HUMAN ORGAN AND TISSUE DONATION AND TRANSPLANTATION PROGRAM AND PROVIDING PENALTIES FOR VIOLATION THEREOF, AMENDING FOR THIS PURPOSE REPUBLIC ACT NO. 7170, AS AMENDED, ALSO KNOWN AS THE ORGAN DONATION ACT OF 1991',
		'SENATE BILL', 'NATIONAL', 'PENDING', '2ND', str_to_date('2016-02-03', '%Y-%c-%d')) ;
	insert into `bill_author` values (3221, 3);
	insert into `bill_author` values(3221, 4);
	insert into `bill_author` values(3221, 5);
	insert into `bill_author` values(3221, 6);
	insert into `bill_subject` values(3221, 'ORGAN DONATION');

insert into `bill`
	values(3222, 'SUMMARY TITLING OF REAL PROPERTIES USED AS PUBLIC SCHOOL SITES',
		'AN ACT PROVIDING FOR THE SUMMARY TITLING OF REAL PROPERTIES USED AS PUBLIC SCHOOL SITES',
		'SENATE BILL', 'NATIONAL', 'COMM REPORT ARCHIVED', NULL, str_to_date('2016-02-03', '%Y-%c-%d'));
	insert into `bill_author` values(3222, 7);
	insert into `bill_author` values(3222, 8);
	insert into `bill_author` values(3222, 9);
	insert into `bill_author` values(3222, 4);
	insert into `bill_author` values(3222, 10);
	insert into `bill_subject` values(3222, 'REAL PROPERTIES');

insert into `bill`
	values(3223, 'PHILIPPINE HIV AND AIDS ACT',
		'AN ACT STRENGTHENING THE PHILIPPINE COMPREHENSIVE POLICY ON HIV AND AIDS PREVENTION, TREATMENT, CARE, AND SUPPORT, REPEALING FOR THE PURPOSE REPUBLIC ACT NO. 8504, OTHERWISE KNOWN AS THE PHILIPPINE AIDS PREVENTION AND CONTROL ACT OF 1998, AND APPROPRIATING FUNDS THEREFORE',
		'SENATE BILL', 'NATIONAL', 'PENDING', '2ND', str_to_date('2016-02-03', '%Y-%c-%d'));
	insert into `bill_author` values(3223, 1);
	insert into `bill_author` values(3223, 3);
	insert into `bill_author` values(3223, 4);
	insert into `bill_author` values(3223, 5);
	insert into `bill_author` values(3223, 6);
	insert into `bill_author` values(3223, 9);
	insert into `bill_author` values(3223, 11);
	insert into `bill_author` values(3223, 12);
	insert into `bill_author` values(3223, 13);
	insert into `bill_author` values(3223, 14);
	insert into `bill_author` values(3223, 15);
	insert into `bill_author` values(3223, 16);



-- insert into `bill`
-- 	values(3224, 'title1', 'a super long body1', 'SENATE BILL', 'scope', 'pending', 'subj', '1st', curdate(), 1);


-- insert into `bill`
-- 	values(3225, 'title1', 'a super long body1', 'SENATE BILL', 'scope', 'pending', 'subj', '1st', curdate(), 1);


-- insert into `bill`
-- 	values(3226, 'title1', 'a super long body1', 'SENATE BILL', 'scope', 'pending', 'subj', '1st', curdate(), 1);


-- insert into `bill`
-- 	values(3227, 'title1', 'a super long body1', 'SENATE BILL', 'scope', 'pending', 'subj', '1st', curdate(), 1);
