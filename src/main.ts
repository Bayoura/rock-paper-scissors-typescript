import { Game } from "./game";
import { Weapon } from "./types";
import { UI } from "./ui";

const game = new Game();
const ui = new UI();

const weaponElements =
    document.querySelectorAll<HTMLImageElement>(".weapon-img");

weaponElements.forEach((element) => {
    element.addEventListener("click", () => {
        const weapon: Weapon = element.id as Weapon;
        const result = game.play(weapon);
        
        ui.showResult(result.result);
        ui.renderScores(0, 0);
    })
})