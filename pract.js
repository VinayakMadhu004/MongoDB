const {MongoClient}=require("mongodb")
const client=new MongoClient("mongodb://localhost:27017/")
async function connect(){
try{
    await client.connect
    console.log("Conncected!")
    const database=client.db("product")
    console.log("Database Created Succesfully!")
    const book=database.collection("items")
    console.log("collection created!")
    constresult
    =await items.insertMany([
        {Id:101,name:"Laptop",price:59999,stock:10},
        {Id:102,name:"Watch",price:2999,stock:12},
        {Id:103,name:"Pen",price:599,stock:5},
        {Id:104,name:"keyboard",price:999,stock:8},
        {Id:105,name:"Hat",price:299,stock:14},
        {Id:106,name:"Chair",price:9999,stock:19},
        {Id:107,name:"Charger",price:599,stock:3},
        {Id:108,name:"perfume",price:999,stock:15}
    ])
    console.log(result.insertedIds)
    const data=await collection.find({price:{$gte:200,$lte:500}}).toArray
    console.log(result)


}
catch(error){
    console.log("Error Occured")
}
finally{
    client.close
}
}

