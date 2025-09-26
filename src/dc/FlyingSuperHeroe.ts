import { IFlyingCharacter } from "../interface/IFlyingCharacter";
import { SuperHeroe } from "./SuperHeroe";

export class FlyingSuperHeroe extends SuperHeroe implements IFlyingCharacter {
  fly(): void {
    console.log("I can fly, and I am DCious");
  }
}
