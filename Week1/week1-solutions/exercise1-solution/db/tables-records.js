import connection from "./connect.js";

const inviteeRecords = {
    table_name: "invitee",
    records: [
        { invitee_name: "Reema", invited_by: "Rob Van Kruijsdijk" },
        { invitee_name: "Waseem ", invited_by: "Rob Van Kruijsdijk" },
        { invitee_name: "Lydia", invited_by: "Rob Van Kruijsdijk" },
        { invitee_name: "Heba", invited_by: "Rob Van Kruijsdijk" },
        { invitee_name: "Noor", invited_by: "Rob Van Kruijsdijk" },
    ],
};
const roomRecords = {
    table_name: "room",
    records: [
        { room_name: "Huddle Up", floor_number: 1 },
        { room_name: "The Link", floor_number: 3 },
        { room_name: "Convening Space", floor_number: 3 },
        { room_name: "The Meet & Greet", floor_number: 2 },
        { room_name: "Meet Up", floor_number: 1 },
    ],
};
const meetingRecords = {
    table_name: "meeting",
    records: [{
            meeting_title: "The Stand Up",
            starting_time: "2022-01-03 11:00:00",
            ending_time: "2022-01-03 13:00:00",
            room_no: "1",
        },
        {
            meeting_title: "DataView",
            starting_time: "2022-01-03 11:00:00 ",
            ending_time: "2022-01-03 13:00:00",
            room_no: "2",
        },
        {
            meeting_title: "Workshop Node js",
            starting_time: "2022-01-03 11:00:00",
            ending_time: "2022-01-03 13:00:00",
            room_no: "5",
        },
        {
            meeting_title: "Boosting web Performance",
            starting_time: "2022-01-03 11:00:00",
            ending_time: "2022-01-03 13:00:00",
            room_no: "3",
        },
        {
            meeting_title: "Steaming - Effective Remote Working",
            starting_time: "2022-01-03 11:00:00",
            ending_time: "2022-01-03 13:00:00",
            room_no: "3",
        },
    ],
};
const insertFunction = (tableRecords) => {
    const { table_name, records } = tableRecords;
    const sql = `INSERT INTO ${table_name} SET ?`;
    records.forEach((record) => {
        connection.query(sql, record, (err, result) => {
            if (err) throw err;
            console.log(`Records  of ${table_name} table are inserted`);
        });
    });
};

const insertRecords = () => {
    insertFunction(inviteeRecords);
    insertFunction(roomRecords);
    insertFunction(meetingRecords);
};

export default insertRecords;