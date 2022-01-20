const tables = {
    invitee: "CREATE TABLE Invitee(invitee_no int  AUTO_INCREMENT, invitee_name VARCHAR(225) NOT NULL, invited_by VARCHAR(225) , PRIMARY KEY(invitee_no))",
    room: "CREATE TABLE Room(room_no int  AUTO_INCREMENT, room_name VARCHAR(225), floor_number int NOT NULL , PRIMARY KEY(room_no))",
    meeting: "CREATE TABLE Meeting(meeting_no int AUTO_INCREMENT , meeting_title VARCHAR(225) NOT NULL, starting_time DATETIME NOT NULL, ending_time DATETIME ,room_no int, PRIMARY KEY(meeting_no), FOREIGN KEY(room_no) REFERENCES Room(room_no) )",
};

export default tables;