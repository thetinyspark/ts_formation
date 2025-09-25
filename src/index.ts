// Array of strings
const tab:string[] = ["HTML", "CSS", "JS", "TS"];
console.log(tab);

const isFormateurSuperCool: boolean = true;
console.log(isFormateurSuperCool);

// null && undefined

let toto = null;
let tata;
console.log(toto, tata, tata === toto);


// number and strings 
let value1 = 40; 
let value2 = [40];


// cast string to number automatically
console.log(value1 == value2);

// with === there's no automatic cast
console.log(value1 === value2);

// eval
const obj = eval("{name: 'toto'}");
console.log(obj);
