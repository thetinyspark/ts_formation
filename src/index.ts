import { HeroeFactory, HeroeType } from "./factory/HeroeFactory";

const factory = new HeroeFactory();

const uniqHeroe1 = factory.createHeroe("Jack Sparrow", 100, HeroeType.SHONEN, true);
const uniqHeroe2 = factory.createHeroe("Barbossa", 100, HeroeType.SHONEN, true);

console.log( uniqHeroe1 === uniqHeroe2 );  // true

// console.log( factory.createHeroe<IMutant & IFlyingCharacter>("Goku", 150, HeroeType.SHONEN) );
// console.log( factory.createHeroe<IMutant>("Spiderman", 100, HeroeType.NON_FLYING) );
// console.log( factory.createHeroe("Jack Sparrow", 100, HeroeType.UNIQ) );
