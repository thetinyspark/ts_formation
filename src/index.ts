import { ShonenHeroe } from "./heroes/ShonenHeroe";
import { IMutant } from "./interface/IMutant";

const goku = new ShonenHeroe();
goku.name = "Goku";
goku.hp = 1000;    

const currentHeroe:IMutant = goku;