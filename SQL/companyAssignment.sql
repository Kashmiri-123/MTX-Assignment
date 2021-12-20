create database sqlAssignment;
use sqlAssignment;

-- Ans 1 
create table products(
	productID int primary key,
    productName varchar(100) not null,
    description varchar(100),
    cost decimal(8, 2)
);
insert into products
(productID, productName, description, cost)
values
(1, "Samsung A31 Mobile", "New Samsung Phone", 34000), 
(2, "Samsung TV", "New Ultra HD Smart TV", 66000),
(3, "Boat Headphone", "New Bluetooth Headphone", 2000),
(4, "Modern India Book", "By Spectrum", 600),
(5, "NCERT 6th - 12th", "All NCERT Book Bundle", 4000);
select * from products;


-- Ans 2
create table customer(
	customerID int primary key,
    customerName varchar(50) not null,
    address varchar(100),
    city varchar(30),
    postalCode int,
    country varchar(30)
);
insert into customer
(customerID, customerName, address, city, postalCode, country)
values
(1, "John", "John address", "Banglore", 781001, "India"), 
(2, "Mike", "Mike address", "Hyderabad", 500081, "India"), 
(3, "Frank", "Frank address", "Hyderabad", 500081, "India"), 
(4, "Johny", "Johny address", "Kolkata", 781004, "India"), 
(5, "Robert", "Robert address", "Washington", 781005, "USA");
insert into customer
(customerID, customerName, address, country)
values
(6, "Johnn", "Johnnn address", "India");
select * from customer;

-- Ans 3
 create table purchase(
	customerID int not null,
    productID int not null,
	foreign key(customerID) references customer(customerID),
    foreign key(productID) references products(productID)
 );
 insert into purchase
 (customerID, productID)
 values
 (1,1), (1,2), (2,2), (1,4), (4,1);
 
 
-- Ans 3
select distinct city from customer; 


-- Ans 4
select distinct count(city) as numberOfDistictCity from customer; 


-- Ans 5
select * from products where cost >= 15000;


-- Ans 7
select 
customerID, customerName, city 
from customer 
where customerID in (select customerID from purchase);


-- Ans 8
select 
c.customerName, p.productName 
from products p join purchase 
on p.productID = purchase.productID
join customer c on c.customerID = purchase.customerID;


-- Ans 9
select customerName, country from customer where country = "India";


-- Ans 10
select * from customer order by customerName asc;

-- Ans 11
select * from customer order by customerName asc, country desc;

-- Ans 12
insert into customer
(customerID, customerName, address, city, country)
values
(7, "Kashmiri", "Kashmiri address", "Guwahati", "India");

-- Ans 13
select * from customer where postalCode is null;


-- Asn 14
select * from customer where postalCode is not null;

-- Ans 15
insert into products
(productID, productName, description, cost)
values
(6, "mobile", "New Vivo Phone", 34000), 
(7, "mobile", "New Vivo camera phone", 20000);

update products set productName = "Vivo Mobile" where productName = "mobile";
select * from products where productName = "mobile";


-- Ans 16
update products set description = concat(productID, " ", productName) where productID = 3;
select * from products where productID = 3;

-- Ans 17
delete from customer where customerID = 5;

-- Ans 18
-- delete from customer;

-- Ans 19
select productID, productName, cost from products where cost = (select max(cost) from products);

-- Ans 20
select productID, productName, cost from products order by cost desc limit 1;

-- Ans 21
select productID, productName, cost from products order by cost asc limit 1;

-- Ans 22
select 
c.customerName, sum(cost) as totalPrice
from products p join purchase pc
on p.productID = pc.productID
join customer c on c.customerID = pc.customerID group by c.customerID ;

-- Ans 23
alter table customer rename column postalCode to pinCode;
select * from customer;

-- Ans 24
alter table products add rating int;
select * from products;

-- Ans 25
create temporary table student(
	id int primary key,
    name varchar(50)
);
insert into student values(1, "Ram"), (2, "Shyam");
select * from student;
drop table student;


-- Ans 26
start transaction;
insert into customer
(customerID, customerName, address, city, country)
values
(8, "transaction", "transaction address", "transaction", "India");
commit;

set autocommit = 0;//commit false/off
insert into customer
(customerID, customerName, address, city, country)
values
(9, "test_1", "test_! address", "test_1_1", "India"),
(10, "test_2", "test_2 address", "test_2_2", "India");

delete from customer where customerID = 8;
rollback;
select * from customer;

-- Ans 27
select customerID as customerID,  count(*) as numOfPurchase from purchase group by customerID;


-- Ans 28
select 
c.customerID, c.customerName, 
p.productName, p.cost
from products p join purchase 
on p.productID = purchase.productID
join customer c on c.customerID = purchase.customerID;


-- Ans 29
create table employee(
	emp_id int primary key,
    name varchar(50),
    address varchar(50),
    city varchar(50),
    state varchar(50),
    country varchar(50)
);
create table department(
	dept_id int primary key,
    dept_name varchar(50),
    emp_id int references employee(emp_id)
);

insert into employee values
(1, "Robert Clive", "Raheja Tower", "Hyderabad", "Telengena", "India"),
(2, "John Dow", "SmartTower", "Delhi", "New Delhi", "India");

insert into department values
(1, "IT", 1),
(2, "Consultancy", 2);

select distinct e.name, e.address, e.city, e.state, d.dept_name 
from employee e inner join department d 
on e.emp_id = d.emp_id;

select * from department;

 