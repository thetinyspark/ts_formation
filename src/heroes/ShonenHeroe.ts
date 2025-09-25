import { IFlyingCharacter } from "../interface/IFlyingCharacter";
import { Heroe } from "./Heroe";

export class ShonenHeroe extends Heroe implements IFlyingCharacter {
    fly(): void {
        console.log("I can fly because I mastered my chi!");
    }
}