import { IFlyingCharacter } from "../interface/IFlyingCharacter";
import { IMutant } from "../interface/IMutant";

export class WalkingDead implements IFlyingCharacter, IMutant{
    fight(opponent: IMutant, dmg: number): void {
        console.log(opponent, dmg);
    }
    isAlive(): boolean {
        return false;
    }
    fly(): void {
        console.log("I believe I can fly...");
    }

}