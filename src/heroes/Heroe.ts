import { IMutant } from "../interface/IMutant";

export abstract class Heroe implements IMutant{
    fight(opponent: IMutant, dmg: number): void {}
    isAlive(): boolean { return false; }
    public name:string = "";
    public hp:number = 0;
}