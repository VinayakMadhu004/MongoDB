const {MongoClient}=require("mongodb")
const client=new MongoClient("mongodb://localhost:27017/")
async function connect(){
    try{
        await client.connect()
        console.log("Client Connected!")
        const Database=client.db("Student_Management")
        console.log("Database Created Succesfully!")
        const Collections=Database.collection("Students")
        console.log("Collections Created Succesfully!")
        // const result=await Collections.insertMany([
        //     {name:"Rahul",age:22,course:"Mern Developer"},
        //     {name:"Anu",age:21,course:"Python"}, 
        //     {name:"Arun",age:23,course:"Java"},
        //     {name:"Aru",age:25,course:"Elec"}, 
        //     {name:"Arjun",age:18,course:"abs"},
        // ])
        // console.log(result)
        // const result=await Collections.find({age:23,course:"Java"}).toArray()
        // console.log(result)
        // const result=await Collections.find({age:{$gt:23}}).toArray();
        // console.log(result)
        // const result=await Collections.find({age:{$lt:20}}).toArray()
        // console.log(result)
        // const result=await Collections.find({},{projection:{name:1,course:1}}).toArray();
        // console.log(result)
        // const result=await Collections.find().sort({age:1}).toArray()
        // console.log(result)
        // const result=await Collections.find().sort({age:-1}).toArray()
        // console.log(result)
        // let result=await Collections.find().limit(2).toArray();
        // console.log(result)
        // let result=await Collections.find().toArray()
        // console.log(result)
        // let result=await Collections.find().skip(7).toArray()
        // console.log(result)
        // let result=await Collections.findOne({age:18})
        // console.log(result)
        // let result= await Collections.findOne({course:"Java"},{sort:{age:1}})
        // console.log(result)
        // let result=await Collections.updateOne({name:"Rahul"},{$set:{course:"MPMC"}})
        // console.log(result)
        // let result=await Collections.updateOne({name:"Kevine"},{$set:{age:22,course:"Java"}},{upsert:true})
        // console.log(result)
        // let result=await Collections.updateOne({name:"Rahul"},{$unset:{course: " "}})
        // console.log(result)

        




    }
    catch(error){
        console.log(error)
    }

}
connect()