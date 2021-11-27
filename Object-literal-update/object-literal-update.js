const first = 'Jahed';
const last = 'Ahmed';
const age = 30;
const job = 'Web Developer';

const person = {
    first,
    last,
    age,
    job,

}

// method with object literal
const person2 = {
    first(select){
        return this[select];
    },
    theOld: function(){

    },
    theNew(){

    },
};

function invertColor(color){
    return '#' +("00000"+(0xFFFFFF-parseInt(color.substring(1),16)).toString(16)).slice(-6);
}


const key = 'pocketColor';
const value = '#ffc600';
const tShirt = {
    [key]: value,
    [`${key}Oppesitecolor`]: invertColor(value)
}
console.log(tShirt);

const keys = ['name', 'age', 'job'];
const values = ['Jahed', 30, 'Web Developer'];
const person3 = {
[keys.shift()]: values.shift(),
[keys.shift()]: values.shift(),
[keys.shift()]: values.shift(),

}




