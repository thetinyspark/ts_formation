import { UI } from "./ui/Inventory";

const inventory = new UI.Inventory();
const inventory2 = new UI.SubUI.SubInventory();
inventory.addItem("Sword");
inventory.addItem("Shield");
inventory.removeItem("Sword");  // Removes "Sword" from inventory

console.log(inventory.items);
console.log(inventory2);