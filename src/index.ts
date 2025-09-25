import { Weapon } from "./weapon/Weapon";

const sword:Weapon = new Weapon();
sword.name = "Excalibur";
sword.crit = 10;
console.log(sword.crit);

for( let i = 0; i < 10; i++){
    console.log(sword.dmg);
}