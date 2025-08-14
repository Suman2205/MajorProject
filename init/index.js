require('dotenv').config({path:'../.env'})
const process=require('process');
const mongoose=require('mongoose');
const initData=require('./data');
const Listing=require('../models/listing');
const dbUrl=process.env.ATLASDB_URL;

main().then((res)=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(dbUrl);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj, owner:"6889f776146b1666fb207bdf"}));
    await Listing.insertMany(initData.data);
    console.log("Data was intialized");
}
initDB().then(()=>{
    console.log("succesful");
})