
create table latLong (
	pets varchar,
	location varchar,
	count int,
	Lat float,
	Lng float
);

select * from latLong;


DROP TABLE jobs;
create table jobs (
	jobs varchar,
	pets varchar,
	count int
);

select * from jobs;

DROP TABLE secrets;
create table secrets (
	secret varchar (50000),
	pets varchar
);

select * from secrets;

create table starsigns (
	sign varchar,
	pets varchar,
	count int
);

select * from starsigns;