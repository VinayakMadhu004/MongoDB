const {MongoClient}=require("mongodb")
const client=new MongoClient("mongodb://localhost:27017/")
async function connect(){
try{
    await client.connect
    console.log("Conncected!")
    const database=client.db("Library_Management")
    console.log("Database Created Succesfully!")
    const book=database.collection("books")
    console.log("collection created!")
// const result = await book.insertMany([
//     { bookname: "The Art of Thinking Big", author: "David Schwartz", price: 2000, stock: 10 },
//     { bookname: "Wings of Fire", author: "A.P.J. Abdul Kalam", price: 1850, stock: 5 },
//     { bookname: "Atomic Habits", author: "James Clear", price: 1500, stock: 12 },
//     { bookname: "The Alchemist", author: "Paulo Coelho", price: 1200, stock: 8 },
//     { bookname: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 900, stock: 15 },
//     { bookname: "Ikigai", author: "Hector Garcia", price: 750, stock: 20 },
//     { bookname: "Think and Grow Rich", author: "Napoleon Hill", price: 1100, stock: 7 },
//     { bookname: "The Power of Habit", author: "Charles Duhigg", price: 1300, stock: 4 },
//     { bookname: "Harry Potter", author: "J.K. Rowling", price: 1600, stock: 9 },
//     { bookname: "The Psychology of Money", author: "Morgan Housel", price: 1400, stock: 18 }
// ]);
    // console.log(result.insertedIds)

    // let data=await book.updateOne({bookname:"The Art of Thinking Big"},{$set:{stock:100,price:500}})
    // console.log(data)
    let data=await book.updateMany({bookname:"The Art of Thinking Big"},{$set:{stock:100,price:500}})
    console.log(data)
    
    
    
    
    // --using include--
    // let data=await book.find({},{projection:{bookname:1,price:1,_id:0}}).toArray();
    // console.log(data)
    
    // --using exclude--
    // let data=await book.find({},{projection:{stock:0,price:0}}).toArray();
    // console.log(data)
    
    // --sort using find() sort Ascending.
    // let data=await book.find().sort({price:1}).toArray();
    // console.log(data)

    // --sort using descending
    // let data = await book.find().sort({price:-1}).toArray();
    // console.log(data)

    // --using limit 
    // let data =await book.find().limit(5).toArray();
    // console.log(data)

    // --using skip 
    // let data =await book.find().skip(5).toArray();
    // console.log(data)

    // --usingfindOne
    // let data=await book.findOne({author:"J.K. Rowling"})
    // if(author){
    //     console.log()
    // }
    
    
    
    

    






}


catch(error){
    console.log("Conncection Failed!")
}
finally{
    client.close()
}
}
connect()
