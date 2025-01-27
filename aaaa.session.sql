-- DROP TABLE Customers;
-- DROP TABLE wishes;
-- DROP TABLE rooms;
-- DROP TABLE detailRoom;
-- DROP TABLE refs;


-- CREATE TABLE Customers ( Id INTEGER PRIMARY KEY AUTOINCREMENT, FirstName VARCHAR(20), Phone VARCHAR(20),Town VARCHAR(30),familyMembers Text(500),Pets text(500), soundless boolean, furniture boolean, hobbyDescription text(500), replan boolean, visitors VARCHAR(200),actvitySphere VARCHAR(200), area float, zones VARCHAR(200), workPlaces INTEGER);

-- CREATE TABLE wishes (userId INTEGER, light text(500), warmFloor text(500), ceiling text(500), floor text(500), conditioner text(500), wannaSee text(500), dontWannaSee text(500), deadline text(500), additional text(500), style text(500),
-- CONSTRAINT fk_userId 
-- FOREIGN KEY (userId) 
-- REFERENCES Customers (id) 
-- );

-- CREATE TABLE rooms (userId INTEGER, room VARCHAR(100), count INTEGER, other text(500), CONSTRAINT fk_userId 
-- FOREIGN KEY (userId) 
-- REFERENCES Customers (id) );

-- CREATE TABLE detailRoom (userId INTEGER, room VARCHAR(100), property VARCHAR(100), description text(500), CONSTRAINT fk_userId 
-- FOREIGN KEY (userId) 
-- REFERENCES Customers (id) );

-- CREATE TABLE refs (userId INTEGER, img VARCHAR(100), description text(500), CONSTRAINT fk_userId 
-- FOREIGN KEY (userId) 
-- REFERENCES Customers (id) );

SELECT * FROM wishes 
