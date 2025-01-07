-- DROP TABLE Customers;
-- CREATE TABLE Customers ( Id INTEGER PRIMARY KEY AUTOINCREMENT, FirstName VARCHAR(20), Phone VARCHAR(20),familyMembers Text(500),Pets text(500), soundless boolean, furniture boolean, hobbyDescription text(500), replan boolean, visitors VARCHAR(200), budget decimal(100,2));

-- CREATE TABLE wishes (userId INTEGER, light text(500), warmFloor text(500), ceiling text(500), eachRoomBudget text(500), conditioner text(500), wannaSee text(500), dontWannaSee text(500), deadline text(500), additional text(500),
-- CONSTRAINT fk_userId 
-- FOREIGN KEY (userId) 
-- REFERENCES Customers (id) 
-- )
-- DROP TABLE rooms;
-- CREATE TABLE rooms (userId INTEGER, room VARCHAR(100), count INTEGER, other text(500), CONSTRAINT fk_userId 
-- FOREIGN KEY (userId) 
-- REFERENCES Customers (id) );

SELECT * FROM rooms

-- SELECT * FROM Customers
