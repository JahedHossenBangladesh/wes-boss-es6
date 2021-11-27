const p = new Promise((resolve, reject) => {
setTimeout(() =>{
// resolve('done');
reject('failed');
},2000);
})

p.then(data => {
console.log(data);
})
.catch(error => {
console.log(error);
});