const {MongoClient}=require ("mongodb")
const client=new MongoClient("mongodb://localhost:27017/")
async function connect(){
try{
    await client.connect
    console.log("Conncected!")
    const database=client.db("Aggrdoc")
    console.log("Database Created Succesfully!")
    const Collections=database.collection("Aggrcollec")
    console.log("collection created!")
    // const result=await Collections.insertMany([
    //     { _id: 1, customer: "John", product: "Laptop", amount: 1200, city: "NYC" },
    //     { _id: 2, customer: "Sarah", product: "Phone", amount: 800, city: "LA" }, 
    //     { _id: 3, customer: "John", product: "Mouse", amount: 25, city: "NYC" }, 
    //     { _id: 4, customer: "Mike", product: "Laptop", amount: 1200, city: "LA" }, 
    //     { _id: 5, customer: "Sarah", product: "Keyboard", amount: 50, city: "LA" },
    //     { _id: 6, customer: "John", product: "Monitor", amount: 300, city: "NYC" } 

    // ])
    // let view=await Collections.aggregate([
    //     {
    //     $group:{_id:"$customer",
    //     totalOrders:{$sum:1}
    //     }
    // }
    // ]).toArray()
    // console.log(view)
let view=await Collections.aggregate([

    {
        $group:{_id:"$customer",
            totalSpend:{$sum:"$amount"}
        }
    },{
        $sort:{totalSpent:-1}
    },
    {$limit:2}
    // {$match:{city:"NYC"}},
    // {$group:{_id:"$customer",
    //     totalSpent:{$sum:"$amount"}
    // }}
    // {$group:{
    // _id:"$customer",
    // totalSpent:{$sum:"$amount"}
    // }},
    // {$match:{totalSpent:{$gt:1000}}}

    {$group:{
        _id:"$customer",
        totalSpent:{$sum:"$amount"}
    }},
    {$match:{totalSpent:{$gt:1000}}}

]).toArray()
console.log(view)







    
}

catch(error){
    console.log("Conncection Failed!")
}
finally{
    client.close()
}
}
connect()