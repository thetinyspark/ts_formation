import { IMutant } from "../interface/IMutant";

export abstract class Heroe implements IMutant{
    fight(opponent: IMutant, dmg: number): void {
        console.log(opponent, dmg);
    }
    isAlive(): boolean { 
        return false; 
    }
    public name:string = "";
    public hp:number = 0;
}