// classe
class Heroe{
    public name:string;
    public age:number;
    public power:string;

    constructor(name:string, age:number, power:string){
        this.name = name;
        this.age = age;
        this.power = power;
    }

    public introduceMySelf():void{
        const str = `I am ${this.name}, I am ${this.age} years old and my power is ${this.power}.`;
        console.log(str);
    }
}

// on déclare un type pour les données
type HeroeInfo = {name:string;age:number;power:string;};

// on peut assumer que ces données viennent d'une API
const data:HeroeInfo[] = [
    {name:"Hulk", age:30, power:"being green"},
    {name:"Iron Man", age:35, power:"technology"},
    {name:"Captain America", age:25, power:"being patriotic"},
    {name:"Hawkeye", age:25, power:"archery"},
    {name:"Thor", age:25, power:"being a god"}
];


function createHeroes(data:HeroeInfo[]):Heroe[]{
    return data.map( 
        (item) => new Heroe(item.name, item.age, item.power)
    );

    return data.map( 
        (item) => item as Heroe
    );

    return data as Heroe[];
    // les 3 returns sont équivalents
    // on transforme chaque élément HeroeInfo en instance de Heroe
    // en le castant avec as. 
    // On pourrait aussi utiliser new Heroe(item.name, item.age, item.power)
    // mais c'est plus verbeux. 
    // C'est un peu comme un "type assertion" en C#
}

createHeroes(data).forEach( h=>h.introduceMySelf())

