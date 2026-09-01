const arr=[1,2,3,4,5,6,7,8,9,10];
const multipleOfthree=arr.map((num)=>(num*3));
console.log(multipleOfthree);

const divisibleByFive=arr.filter((num)=>num%5===0);
console.log(divisibleByFive);

const firstdivisibleByFive=arr.find((num)=>num%5===0);
console.log(firstdivisibleByFive);

const sumOFarray=arr.reduce((num,acc)=>acc+=num,0);
console.log(sumOFarray);