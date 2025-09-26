import { Heroe } from "../heroes/Heroe";
import { SuperHeroe } from "./SuperHeroe";

export class League {
  public nonFlyingHeroes: Heroe[] = [
    new SuperHeroe("Hulk"),
    new SuperHeroe("Captai America"),
  ];

  public flyingHeroes: Heroe[] = [
    new SuperHeroe("Thor"),
    new SuperHeroe("Iron Man"),
  ];
}
