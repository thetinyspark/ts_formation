import {DynamicFactory, HeroeType } from "./factory/DynamicFactory";
import { NonFlyingHeroe } from "./heroes/NonFlyingHeroe";
import { ShonenHeroe } from "./heroes/ShonenHeroe";
import { UniqHeroe } from "./heroes/UniqHeroe";

const factory = new DynamicFactory();

factory.registerBuilder( HeroeType.SHONEN, (name:string, hp:number)=> {
    const heroe = new ShonenHeroe();
    heroe.name = name;
    heroe.hp = hp;
    return heroe;
} );

factory.registerBuilder( HeroeType.UNIQ, (name:string, hp:number)=> {
    const heroe = new UniqHeroe();
    heroe.name = name;
    heroe.hp = hp;
    return heroe;
} , true );

factory.registerBuilder( HeroeType.NON_FLYING, (name:string, hp:number)=> {
    const heroe = new NonFlyingHeroe();
    heroe.name = name;
    heroe.hp = hp;
    return heroe;
} );

const uniqHeroe1 = factory.createInstance(HeroeType.UNIQ, "Jack Sparrow", 100 );
const uniqHeroe2 = factory.createInstance(HeroeType.UNIQ, "Barbossa", 100);

console.log( uniqHeroe1 === uniqHeroe2 );  // true

// console.log( factory.createHeroe<IMutant & IFlyingCharacter>("Goku", 150, HeroeType.SHONEN) );
// console.log( factory.createHeroe<IMutant>("Spiderman", 100, HeroeType.NON_FLYING) );
// console.log( factory.createHeroe("Jack Sparrow", 100, HeroeType.UNIQ) );
