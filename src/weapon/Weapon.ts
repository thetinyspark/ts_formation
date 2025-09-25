export class Weapon{
    public name:string = "";
    private _baseDmg:number = 10
    private _crit:number = 0; 
    private _specialDmg:number = 2;

    public set crit(value:number){
        if( value < 0 ) value = 0;
        if( value > 1 ) value = 1;
        this._crit = value;
    }

    public get crit():number{
        return this._crit;
    }

    public get dmg():number{

        // le taux de critique est un pourcentage compris entre 0 et 1
        const dmg1 = (this._baseDmg + this._specialDmg);
        const multiplicator = 2;

        if( Math.random() < this._crit ){
            return dmg1 * multiplicator;
        }
        return dmg1;
    }
}