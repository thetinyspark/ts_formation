import { Weapon } from "./weapon/Weapon";

const sword:Weapon = new Weapon();
// sword.name = "Excalibur";

for( let i = 0; i < 10; i++){
    sword.crit = 0;
    sword.specialDmg = Math.floor(Math.random() * 10);
    console.log(sword.dmg);
}