import Mongo from "mongodb";
const MongoClient = Mongo.MongoClient;
const url =
    "mongodb+srv://Reema:hyfpassword@myhyfprojects.p2ycs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const seedDatabase = async() => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        // create record
        const city = {
            Name: "Shahba",
            CountryCode: "SYR",
            District: "Swaidaa",
            Population: 14784,
        };

        const newCity = await client.db("world").collection("city").insertOne(city);
        console.log(newCity);
        //
        // update record
        const updateCity = await client
            .db("world")
            .collection("city")
            .updateMany({ Name: "Shahba" }, { $set: { Population: 20549 } });
        console.log(updateCity);
        //
        // read-record
        const findCityName = await client
            .db("world")
            .collection("city")
            .find({ Name: "Shahba" })
            .toArray();
        console.log(findCityName);
        //
        const findCityCode = await client
            .db("world")
            .collection("city")
            .find({ CountryCode: "SYR" })
            .toArray();
        console.log(findCityCode);
        //
        //delete record
        const deleteCity = await client
            .db("world")
            .collection("city")
            .deleteMany({ Name: "Shahba" });
        console.log(deleteCity);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
};
seedDatabase();