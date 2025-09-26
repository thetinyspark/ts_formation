import * as HeroePool from "./dc";
// import { SuperHeroe, League } from "./dc";
// import { SuperHeroe, League } from "./marvel";


const league = new HeroePool.League();
const heroe = new HeroePool.SuperHeroe("green arrow");

// const league = new League();
// const heroe = new SuperHeroe("green arrow");

// les namespaces permettent d'éviter les conflits de noms
// toutefois en typescript moderne, vu que chaque fichier est un module, 
// on peut aussi utiliser les imports/exports pour éviter les conflits de noms. 

// les namespaces sont donc un peu dépréciés, mais on les trouve encore dans beaucoup de code legacy.


league.nonFlyingHeroes.push(heroe);

console.log(league.flyingHeroes);
console.log(league.nonFlyingHeroes);