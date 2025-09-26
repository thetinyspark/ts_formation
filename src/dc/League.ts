import { Heroe } from "../heroes/Heroe";
import { SuperHeroe } from "./SuperHeroe";

export class League {
  public nonFlyingHeroes: Heroe[] = [
    new SuperHeroe("Batman"),
    new SuperHeroe("Green Arrow"),
  ];

  public flyingHeroes: Heroe[] = [
    new SuperHeroe("Superman"),
    new SuperHeroe("Green Lantern"),
  ];
}
