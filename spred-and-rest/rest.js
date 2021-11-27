function convertCurrency(rate,tax,...amounts){
    console.log(rate,tax,amounts);
    return amounts.map(amount => amount * rate)
}

const result = convertCurrency(1.5,0.2,100,200,300);
console.log(result);

const team = ['John','Mike','Jane','Mary'];
const [captain,vice,...players] = team;
console.log(captain,vice,players);
