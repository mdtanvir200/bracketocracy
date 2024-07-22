const mongoose=require('mongoose');

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/bracketocracy');
}

main().then(
    ()=>{console.log("Database Connection Done!")}
).catch(
    (err)=>{console.log(err)}
)

module.exports=mongoose; 