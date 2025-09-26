import { Inventory } from "./ui/Inventory";
import { Weapon } from "./weapon/Weapon";

const bag = new Inventory<string, Weapon|string>();
const sword = new Weapon("Sword", 10);
const axe = new Weapon("Axe", 15);

bag.addItem("excalibur", sword);
bag.addItem("hache conan", axe);   
bag.addItem("message", "Tuer les ennemis les voir mourir devant soi");   
bag.addItem("numEnnemies", "100");   

bag.removeItem("excalibur");
bag.removeItem("message");
bag.removeItem("hache conan");

console.log(bag.getIemByKey("numEnnemies"));