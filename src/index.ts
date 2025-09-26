// import "reflect-metadata";

import { DynamicFactory } from "./factory/DynamicFactory";
import { Heroe } from "./heroes/Heroe";
import { NonFlyingHeroe } from "./heroes/NonFlyingHeroe";
import { ShonenHeroe } from "./heroes/ShonenHeroe";
import { IFlyingCharacter } from "./interface/IFlyingCharacter";

    type Constructable<T> = new (...args: any[]) => T;
const factory = new DynamicFactory();

// décorateur de fonction/méthode
function LogMethodCall(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
    // on va chercher l'implémentation de la fonction
  const func = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Appel de ${propertyKey} avec`, args);
    return func.apply(this, args);
  };
}

function Logger() {
  return function (constructor: Function) {
    console.log(`${constructor.name} class created`);
  };
}

function Injectable<T>( key:string, uniq:boolean ){

    return function (target: Constructable<T>){
        factory.registerBuilder( 
            key, 
            (...params:any)=> new target(...params)
            , uniq
        );
    }
}

function Inject<T>(key:string, ...params:any[]){
    return factory.createInstance<T>(key, ...params);
}

// mixin
function makeFlying<T extends Constructable<any>>(userClass:T){
    return class extends userClass implements IFlyingCharacter{
        constructor(...args:any[]){super(...args);}
        public fly():void{
            console.log("coucou je suis un volant");
        }
    }
}



interface IEmployee{
    getSpeed():number
}


class Employee implements IEmployee {
  getSpeed(): number {
      return this.speed;
  }
  protected speed:number = 5;
}

@Injectable("Test", true)
class SuperEmployee extends Employee{
  constructor(){
    super();
    this.speed = 10;
  }
}

// avec l'injection de dépendances, on minimise grandement le nombre de
// dépendances à des classes pour se focaliser sur les dépendances aux 
// interfaces ( ce qui est mieux )

// on évite de refactorer du code qui aurait autrement du être écrit en dur
// on peut également créer plusieurs profils de configuration de l'injecteur de 
// dépendances afin de comparer les performances du code
class Boss{
    public employee:IEmployee; 
    constructor(){
        this.employee =  Inject<IEmployee>("Test") as IEmployee;
    }
}

// permet de créer une nouvelle classe qui implémente IFlyingCharacter
// à l'aide de mixins
class FlyingBoss extends makeFlying(NonFlyingHeroe){}
const obj = new FlyingBoss().fly();

console.log( new Boss().employee.getSpeed());

