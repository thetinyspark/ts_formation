"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHeroeController = void 0;
const Heroe_1 = require("../model/Heroe");
class CreateHeroeController {
    run() {
        const heroe = new Heroe_1.Heroe();
        heroe.name = "Superman";
        console.log(heroe);
    }
}
exports.CreateHeroeController = CreateHeroeController;
