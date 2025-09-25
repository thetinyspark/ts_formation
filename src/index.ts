// classe
class Heroe{
    public name:string;
    protected _age:number;

    constructor(name:string){
        this.name = name;
        this._age = 30;
    }

    public introduceMySelf():void{
        console.log(this.name +","+this._age);
    }
}


// héritage
class SuperHeroe extends Heroe{
    constructor(name:string){
        // appaler au constructeur de la classe parente
        super(name);
        this._age = 41;
    }

    // surcharge de méthode
    public introduceMySelf():void{
        super.introduceMySelf(); // appel de la méthode parente
        console.log("Je suis " + this.name + ", " + this._age + " ans");
    }
}

const heroe = new Heroe("Batman");
const heroe2 = new SuperHeroe("Spiderman");
heroe.introduceMySelf();
heroe2.introduceMySelf();
