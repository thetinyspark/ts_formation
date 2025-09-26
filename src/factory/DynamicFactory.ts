import { Heroe } from "../heroes/Heroe";
import { NonFlyingHeroe } from "../heroes/NonFlyingHeroe";
import { ShonenHeroe } from "../heroes/ShonenHeroe";
import { UniqHeroe } from "../heroes/UniqHeroe";

export enum HeroeType {
    UNIQ = "UNIQ",
    SHONEN = "SHONEN", 
    NON_FLYING = "NON_FLYING"
}

type BuilderInfo = {uniq:Boolean, builder:Function};

export class DynamicFactory {

    // on une map qui contient les éventuelles instances uniques associées à une clé (string)
    private _instances: Map<string, any> = new Map();

    // ici on a une map qui stocke des infos nous permettant de créer des instances d'objets 
    // (toujours en fonction d'une clé)
    private _builders:Map<string, BuilderInfo> = new Map();

    public registerBuilder( type: string, builder: Function, uniq: boolean = false ): void {
        // on enregistre des objets de type BuilderInfo qui contiennent la fonction 
        // qui permet de construire et retourner l'instance que l'on souhaite en fonction
        // d'une clé (type)
        this._builders.set(type, {builder, uniq});
    }

    public createInstance<T>(type:string,  ...params:any[]): T|null {

        // on déclare une variable qui va contenir l'instance
        let instance = null;

        // on récupère l'objet BuilderInfo en fonction de la clé (type)
        let info:BuilderInfo|null = this._builders.get(type) || null;

        // si le builder n'existe pas, on retourne null
        if( info === null ){
            return null;
        }
        
        // si l'instance doit être unique et qu'elle existe déjà, on la retourne
        if( info.uniq && this._instances.has(type) ){
            return this._instances.get(type) as T;
        }

        // on crée l'instance via la fonction builder
        instance = info.builder(...params) || null;

        // si l'instance n'a pas pu être créée, on retourne null
        if( instance === null ){
            return null;
        }

        // si l'instance doit être unique, on l'enregistre dans la map des instances
        if( info.uniq ){
            this._instances.set(type, instance);
        }

        // on retourne l'instance
        return instance as T;
    }
}