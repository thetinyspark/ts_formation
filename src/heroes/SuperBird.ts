import { IFlyingCharacter } from "../interface/IFlyingCharacter";

export class SuperBird implements IFlyingCharacter{
    fly(): void {
        console.log("flap flap !");
    }
    
}