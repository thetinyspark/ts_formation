import { NonFlyingHeroe } from "./heroes/NonFlyingHeroe";
import { ShonenHeroe } from "./heroes/ShonenHeroe";
import { SuperBird } from "./heroes/SuperBird";
import { WalkingDead } from "./heroes/WalkingDead";
import { IFlyingCharacter } from "./interface/IFlyingCharacter";


function isFlyingCharacter(character: any):boolean {
    return (character as IFlyingCharacter).fly !== undefined;
}

function isFlyingMutant(character: any):boolean {
    return ( 
        (character).fly !== undefined && 
        (character).fight !== undefined && 
        (character).isAlive !== undefined
    )
}

const kamesenin = new NonFlyingHeroe();
const randomZombie = new WalkingDead();
const sephiroth = new ShonenHeroe();
const bird = new SuperBird();


sephiroth.name = "Sephiroth";
kamesenin.name = "Kamesenin";
randomZombie;


console.log( isFlyingMutant(bird) );
console.log( isFlyingMutant(sephiroth) );
console.log( isFlyingMutant(kamesenin) );
console.log( isFlyingMutant(randomZombie) );

const allCharacters = [kamesenin, randomZombie, sephiroth, bird];
const flyingCharacters:IFlyingCharacter[] = allCharacters.filter((c)=>isFlyingCharacter(c)) as IFlyingCharacter[];

console.log(allCharacters);
console.log(flyingCharacters);

