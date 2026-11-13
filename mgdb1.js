const {MongoClient} =require("mongodb") 
const url ="mongodb://localhost:27017";  // mongodb communication
const client=new MongoClient(url); // object made for communication 
async function conn() {
    try{
    await client.connect()
    console.log("Conncected!")
    const database=client.db("college")
    console.log("Database Created Succesfully!")
    const students=database.collection("students")
    console.log("Collection Created")
    // const result=await students.insertOne({
    //     name:"Heyzel",
    //     age:22
    // })
    // console.log(result.insertedId)
    const result=await studentss.insertMany([
        {name:heyz,age:21,grade:A ,enrolled:yes},
        {name:zend,age:20,grade:B,enrolled:no},
    ])
    }
    catch(error){
        console.log("Connection Failed!")
    }
    finally{
        client.close();
    }
}
conn()


