const {MongoClient}=require("mongodb")
const { stdout } = require("process")
const client=new MongoClient("mongodb://localhost:27017/")
const Database=client.db("Hospital_Management")
const Collections=Database.collection("Users")
const readline=require ("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function askQuestions(question){
    return new Promise((resolve)=>{
        rl.question(question,(answer)=>{
            resolve(answer)
        });
    });
}
async function main(){
    await client.connect()
    const usertypye=await askQuestions("Are you a new user? (yes/no):")
    console.log("You entered " + usertypye)

    if(usertypye==="yes"){
        const name=await askQuestions("Enter your name:")
        const age=await askQuestions("Enter your age:")
        const ph=await askQuestions("Enter your Phone:")
        const id=await Math.floor(100 + Math.random() * 900);
        await Collections.insertOne({
            id:id,
            name:name,
            age:age,
            ph:ph
        })
        console.log("Your ID is " + id)
        while(true){ 
        const appointmentcollec= Database.collection("AppointmentData")
        console.log("1.Book Your Appointments")
        console.log("2.View Your Appointments")
        console.log("0.Exit")
        const choice=await askQuestions("Enter your Choice:")
        if(choice==1){
            const userid=Number(await askQuestions("Enter your ID:"))
            console.log("Entered user id is " + userid)
            const Departments= await Database.collection("departments")
            const   departments=await Departments.find({}).toArray()
            for(const department of departments){
                console.log(department.name)
        
            if(department){
                console.log(`You selected:${department.name}`)  
            }
            else{
                console.log("Invalid Department ID! Enter Again")
            }
        }
            const deptvisit=await askQuestions("Enter the ID of the Department you need to visit:")

            let doctorname;
            if(deptvisit=="1"){
                console.log("Cardiology")
            }
            else if(deptvisit=="2"){
                console.log("Neurology")
                console.log("1.Dr.Williams")
                console.log("2.Dr.Brown")
                const doc=await askQuestions("Which Dotor you want to Visit:")
                
                if(doc=="1"){
                    doctorname="Dr.Williams"
                }
                else if(doc=="2"){
                    doctorname="Dr.Brown"
                }
                    
                
                
            }
            else if(deptvisit=="3"){
                console.log("Orthipedics")
            }
            else if(deptvisit==="4"){
                console.log("Pediatrics")
            }
            else if(deptvisit=="5"){
                console.log("Dermatology")
            }
            await appointmentcollec.insertOne({
                ID:userid,
                Department:deptvisit,
                Doctor:doctorname,

            })
            console.log("Your Booking is succesfully Completed!")

        }
        else if(choice===2){
        const userid=Number(await askQuestions("Enter your ID:")) 
        const appointments=await  appointmentcollec.find({ID:userid}).toArray();
        for(const appointment of appointments){
            console.log(`ID:${appointment.ID}|${appointment.Department}|{$appointment.Doctor}`)

            
        }
        console.log("View your Appointments")
        }
        else if(choice=="0"){

         console.log("Exit!")
         break;
        }

        


    }}
    else{
        console.log("You are an Existing user!")























    }
    
}
main()