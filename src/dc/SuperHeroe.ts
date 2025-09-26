import { Heroe } from "../heroes/Heroe";

export class SuperHeroe extends Heroe {
  constructor(name: string = "") {
    super();
    this.name = name;
  }
}
