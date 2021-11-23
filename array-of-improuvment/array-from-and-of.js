function sumAll(){
const num = Array.from(arguments);
return num.reduce((a,b)=>a+b,0);

}
const result =sumAll(3,4,5,6,4,5,6,7,8,9,10);
console.log(result);

const ages = Array.from(2,3,4,5,6,7,8,9,10);
console.log(ages);