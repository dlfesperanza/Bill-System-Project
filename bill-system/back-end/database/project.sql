-- BILL FILING SYSTEM

create database if not exists `bill_files`;
	use `bill_files`;

create table if not exists `legislator`(
	`empid` int(6) not null,
	`fname` varchar(20),
	`mname` varchar(20),
	`lname` varchar(20),
	`bday` date,
	`sex` varchar(1),
	`type` varchar(15),
	`sal` int(7),
	`noofterms` int(2),
	`termstart` date,
	`termend` date,
	constraint `legislator_empid_pk` primary key(empid)
);
create table if not exists `legislator_address`(
	empid int(6) not null,
	housenumber int(8),
	street varchar(20),
	city varchar(20),
	province varchar(20),
	region varchar(20),
	coountry varchar(20),
	constraint legislator_address_empid_fk foreign key (empid)
		references legislator(empid)
);


create table if not exists `bill`(
	`billno` int(6) not null,
	`title` text not null,
	`body` text not null,
	`billtype` varchar(20) not null,
	`scope` varchar(20) not null,
	`status` varchar(30),
	`reading` varchar(6),
	`datefiled` date not null,
	constraint `bill_billno_pk` primary key(billno)
);
create table if not exists `bill_subject`(
	`billno` int(6),
	`subject` varchar(20),
	constraint `bill_subject_billno_fk` foreign key (billno) references bill(billno)
);
create table if not exists `bill_author`(
	`billno` int(6) not null,
	`empid` int(6) not null,
	constraint `bil_author_billno_fk` foreign key(billno) references bill(billno),
	constraint `bill_author_empid_fk` foreign key(empid) references legislator(empid)
);


create table if not exists `house`(
	`congressno` int(6) not null,
	`housetype` varchar(15),
	`meetingplace` varchar(15),
	`speaker` varchar(20),
	`termstart` date,
	constraint `house_congressno_pk` primary key (congressno)
);
create table if not exists `housemember`(
	`empid` int(6) not null,
	`congressno` int(6) not null,
	`representation` varchar(15),
	constraint `housemember_empid_fk` foreign key(empid)
		references legislator(empid),
	constraint `housesmember_congressno_fk` foreign key(congressno)
		references house(congressno)
);
create table if not exists `housecomm`(
	`congressno` int(6) not null,
	`housecomm` int(6) not null,
	`commname` varchar(30) not null,
	constraint `housecomm_congressno_fk` foreign key(congressno)
		references house(congressno),
	constraint `housecomm_housecomm_uk` unique (housecomm)
);


create table if not exists `senate`(
	`congressno` int(6) not null,
	`senatetype` varchar(15),
	`meetingplace` varchar(15),
	`president` varchar(20),
	`termstart` date,
	constraint `senate_congressno_pk` primary key (congressno)
);
create table if not exists `senator`(
	`empid` int(6) not null,
	`congressno` int(6) not null,
	`party` varchar(15),
	constraint `senator_empid_fk` foreign key(empid)
		references legislator(empid),
	constraint `senator_congressno_fk` foreign key(congressno)
		references senate(congressno)
);
create table if not exists `senatecomm`(
	`congressno` int(6) not null,
	`senatecomm` int(6) not null,
	`commname` varchar(30) not null,
	constraint `senatecomm_congressno_uk` unique(congressno),
	constraint `senatecomm_housecomm_uk` unique(senatecomm)
);


--Features:
delimiter //

---------------------------------------------add operations

-----------------------------------------------------------
--|-- kung pwede sa server na lang checking kung:     --|--
--|--		-existing sa db yung mga references sa fk --|--
--|--		-existing na sa db yung mga pk 			  --|--
-----------------------------------------------------------

create procedure addBill(
	billno int(6), title text, body text, billtype varchar(20),
	scope varchar(20), status varchar(30),
	reading varchar(6), datefiled date
	)
	begin
		insert into `bill`
		values(billno, title, body, billtype, scope, status, reading, datefiled);
	end //
create procedure addBillAuthor(billno int(6), empid int(6))
	begin
		insert into `bill_author` values(billno, empid);
	end //
create procedure addBillSubject(billno int(6), subject varchar(20))
	begin
		insert into `bill_subject` values(billno, subject);
	end //

create procedure addLegislator(fname varchar(20), mname varchar(20), lname varchar(20), bday date, sex varchar(1), type varchar(15), sal int(7), noofterms int(2), termstart date)
	begin
		insert into `legislator`
			values((select empid from legislator having empid=max(empid))+1,
				fname, mname, lname, bday, sex, type, sal,
				noofterms, termstart, adddate(termstart, 3 year));--di ko alam paano gammitin adddate() fxn
	end //

create procedure addSenate(congressno int(6), senatetype varchar(15), meetingplace varchar(15), president varchar(20), termstart date)
	begin
		insert into `senate`
			values (congressno, senatetype, meetingplace, president, termstart);
	end //
create procedure addSenator(empid int(6), congressno int(6), party varchar(15))
	begin
		insert into `senator`
			values(empid, congressno, party);
	end //
create procedure addSenateCommittee( congressno int(6), senatecomm int(6), commname varchar(30))
	begin
		insert into `senatecomm`
			values(congressno, senatecomm, commname);
	end //


create procedure addHouse(congressno int(6), senatetype varchar(15), meetingplace varchar(15), president varchar(20), termstart date)
	begin
		insert into `house`
			values (congressno, senatetype, meetingplace, speaker, termstart);
	end //
create procedure addHouseMember(empid int(6), congressno int(6), representation varchar(15))
	begin
		insert into `housemember`
			values(empid, congressno, representation);
	end //
create procedure addHouseCommittee( congressno int(6), senatecomm int(6), commname varchar(30) )
	begin
		insert into `housecomm`
			values(congressno, housecomm, commname);
	end //


------------------------------------------update operations



------------------------------------------delete operations

create procedure deleteBill(bill_no int(6))
	begin
		delete from `bill` where billno=bill_no;
	end //


create procedure deleteLegislator(emp_id int(6))
	begin
	-- wait fuck! paano yung mga bills na filed by legislator?
		delete from `legislator` where empid=emp_id;
		delete from `senator` where empid=emp_id;		-- kung wala namang emp_id sa senator wlang affected rows
		delete from `housemember` where empid=emp_id;	-- isa lang affected either senator table or housemember table
	end //

delimiter ;


---- rekta na lang iqyery to sa server -------------------------------------

--reports:

--working
-- view all bills filed at the senate on year year
-- kailangan ba ng user input?
	-- select * from bill where year(datefiled)=2000; --


--working
-- view all bills filed at the senate by senator senator
	-- select * from bill where billtype='SENATE BILL' and empid=(select empid from legislator where fname=<input.fname> and lname=<input.lname>);
	-- select * from bill where billtype='HOUSE BILL' and empid=(select empid from legislator where fname=<input.fname> and lname=<input.lname>);

--PWEDE PANG BAGUHIN					--working
	-- select * from bill where status='pending' and reading='2nd' and billtype='senate bill';
	-- select * from bill where status='pending' and reading='3rd' and billtype='senate bill';
	-- select * from bill where status='passed' and reading='' and billtype='senate bill';

	-- select * from bill where status='pending' and reading='2nd' and billtype='house bill';
	-- select * from bill where status='pending' and reading='3rd' and billtype='house bill';
	-- select * from bill where status='passed' and (reading='' or reading is null) and billtype='house bill';
