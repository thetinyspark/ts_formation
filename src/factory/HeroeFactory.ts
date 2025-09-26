import { Heroe } from "../heroes/Heroe";
import { NonFlyingHeroe } from "../heroes/NonFlyingHeroe";
import { ShonenHeroe } from "../heroes/ShonenHeroe";
import { UniqHeroe } from "../heroes/UniqHeroe";

export enum HeroeType {
    UNIQ,
    SHONEN, 
    NON_FLYING
}

export class HeroeFactory {

    private _instances: Map<HeroeType, any> = new Map();



    public createHeroe<T>(
        name:string = "MyHeroe",
        hp:number = 100,
        type:HeroeType = HeroeType.SHONEN, 
        uniq: boolean = false
    ): T {

        let heroe = null;
        if( uniq && this._instances.has(type) ){
            return this._instances.get(type) as T;
        }

        switch(type){
            case HeroeType.UNIQ:
                heroe = new UniqHeroe();
                break;

            case HeroeType.NON_FLYING:
                heroe = new NonFlyingHeroe();
                break;

            default:
                heroe = new ShonenHeroe();
                break;
        }

        heroe.name = name;
        heroe.hp = hp;

        if( uniq ){
            this._instances.set(type, heroe);
        }

        return heroe as T;
    }
}