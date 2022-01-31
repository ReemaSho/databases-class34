# Normalization

1. What columns violate 1NF?

- **_member_id_**, **_dinner_id_**, **_venue_code_** and **_food_code_** columns have a duplicate entries. **_member_id_** should be a primary key.

- **_member_address_** and **_dinner_date_** columns violate the rule of attribute domain should not change. Values in **_member_address_** are from multiple types and date isn't in the proper format in **_dinner_date_**.

- **_food_code_** and **_food_description_** columns violate the rule of single valued attributes.

2. What entities do you recognize that could be extracted?

- Members.

- Members_addresses.

- Dinner.

- Venues.

- Food.

3. Name all the tables and columns that would make a 3NF compliant solution.

```sql
CREATE TABLE Members(member_id int AUTO_INCREMENT,member_name NOT NULL VARCHAR(50),address_id int NOT NULL, PRIMARY KEY (member_id), CONSTRAINT FK_address FOREIGN KEY (address_id) REFERENCES Members_addresses (address_id));

CREATE TABLE Members_addresses (address_id int AUTO_INCREMENT,country VARCHAR(150) NOT NULL, city VARCHAR(150) NOT NULL,  post_code VARCHAR(6) NOT NULL, street varchar(150) NOT NULL, house_number varchar(5), PRIMARY KEY (address_id));

CREATE TABLE Dinners (dinner_id int AUTO_INCREMENT, dinner_date DATETIME NOT NULL, venue_code VARCHAR(10) NOT NULL, PRIMARY KEY (dinner_id), CONSTRAINT FK_venue FOREIGN KEY (venue_code) REFERENCES Venues (venue_code));

CREATE TABLE Venues(venue_code VARCHAR(10) NOT NULL , venue_description VARCHAR(50) NOT NULL , PRIMARY KEY (venue_code))

CREATE TABLE Food(food_code VARCHAR(10) NOT NULL , Food_description VARCHAR(50) NOT NULL , PRIMARY KEY (food_code));

CREATE TABLE Members_Dinners (member_id int NOT NULL, dinner_id VARCHAR(10) NOT NULL ,CONSTRAINT FK_member FOREIGN KEY (member_id) REFERENCES members(member_id),CONSTRAINT FK_dinner FOREIGN KEY (dinner_id) REFERENCES Dinners (dinner_id));

CREATE TABLE Dinners_FOOD (dinner_id int NOT NULL, food_code VARCHAR(10) NOT NULL ,CONSTRAINT FK_dinner FOREIGN KEY (dinner_id) REFERENCES Dinners(dinner_id),CONSTRAINT FK_food FOREIGN KEY (food_code) REFERENCES Food(food_code));
```
