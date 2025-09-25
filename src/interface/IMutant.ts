export interface IMutant {
    fight( opponent:IMutant, dmg:number):void;
    isAlive():boolean;
}