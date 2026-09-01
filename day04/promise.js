const myPromise=new Promise((resolve,reject) => {
let age =19;
if(age>=18){
    resolve("Eligible for vote.....");
}
else{
    reject("Not Eligible for vote....");
}
})
const checkvoteEligibilty=async()=>{
    try{
        const msg = await myPromise;
        console.log(msg);
    }
    catch(error){
        console.log(error);
    }
    


}
 checkvoteEligibilty();

// myPromise
//     .then((msg)=> console.log(msg))
//     .catch((error)=> console.log(error))


