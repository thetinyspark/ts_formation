import { IFlyingCharacter } from "../interface/IFlyingCharacter";
import { Heroe } from "./Heroe";

export class ShonenHeroe extends Heroe implements IFlyingCharacter {
    fly(): void {
        console.log("I can fly because I mastered my chi!");
    }

    // override the isAlive method
    // override est un mot clé purement cosmétique qui permet de signaler qu'on override une méthode parente
    // si on ne le fait pas, le code compile quand même
    // mais si on le fait et qu'on ne respecte pas la signature de la méthode parente, le compilateur signale une erreur
    // c'est donc une bonne pratique de toujours mettre override quand on override une méthode parente
    override isAlive(): boolean {
        super.isAlive();
        return true;
    }
}