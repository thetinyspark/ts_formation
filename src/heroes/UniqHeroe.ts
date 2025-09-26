import { Heroe } from "./Heroe";

export class UniqHeroe extends Heroe{
    private static _instance: UniqHeroe | null = null;

    public static getInstance(): UniqHeroe {
        if( UniqHeroe._instance == null ){
            UniqHeroe._instance = new UniqHeroe();
        }
        return UniqHeroe._instance;
    }

    private constructor(){
        super();
    }
}