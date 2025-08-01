const mongoose=require('mongoose');
const initData=require('./data');
const Listing=require('../models/listing');
main().then((res)=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
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