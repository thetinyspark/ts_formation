// import "reflect-metadata";

import { DynamicFactory } from "./factory/DynamicFactory";

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

function Injectable( key:string, builder:Function, uniq:boolean ){
    return function (constructor:Function){
        factory.registerBuilder( key, builder, uniq);
    }
}

function Inject(key:string, ...params:any[]){
    return factory.createInstance(key, ...params);
}




@Injectable("Test", ()=> new Test(), false)
class Test {

  public name:string;

//   @LogMethodCall
  helloWorld(param: string) {
    // console.log(param);
  }

  constructor(){this.name = ""}
}

const test1 = Inject("Test", 10,10);
const test2 = Inject("Test", 10,10);
console.log(test1 === test2);
