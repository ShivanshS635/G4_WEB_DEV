const http = require("http");
const { MongoClient } = require("mongodb");

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'ChitkaraG4';

async function main(){
    await client.connect();
    console.log("Connected Successfuly To Server");
    const db = client.db(dbName);
    const collection = db.collection('students');

    //INSERTING DATA
    // const insertResult = await collection.insertMany([{
    //     name : "Shivansh Sharma",
    //     class : "G1",
    //     rollNo : "833"
    // },
    // {
    //     name : "Shubham Goyal",
    //     class : "G4",
    //     rollNo : "845"
    // },
    // {
    //     name : "Sneha Pal",
    //     class : "G4",
    //     rollNo : "996"
    // },
    // {
    //     name : "Sujal",
    //     class : "G1",
    //     rollNo : "868"
    // },
    // {
    //     name : "Shubham Guglani",
    //     class : "G4",
    //     rollNo : "846"
    // },
    // {
    //     name : "Tanishq Arya",
    //     class : "G4",
    //     rollNo : "896"
    // }]);
    // console.log("Inserted Document =>" , insertResult);

    //FINDING ALL DATA
    // const findResult = await collection.find({}).toArray();
    // console.log(findResult)

    //FIND DOCUMENT WITH QUERY FILTERING
    // const filteredDoc = await collection.find({rollNo : "996"}).toArray();
    // console.log(filteredDoc);

    //UPDATE A DOCUMENT
    // const updateResult = await collection.updateOne({rollNo : '996'} , {$set: {class : 'G1'}});
    // console.log(updateResult)

    //REMOVE A DOCUMENT
    // const removeResult = await collection.deleteOne({rollNo : '996'});
    // console.log(removeResult);

    return 'done';
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());

const server = http.createServer((req , res) => {
    if(req.method == 'GET' && req.url == '/'){
        res.writeHead(200 , {"Content-Type" : "text/plain"})
        res.end("Hello World!!")
    }
});

server.listen(8080 , () => {
    console.log("Server is running at http://localhost:8080")
})