import { Game } from "./game.js";
import { Weapon } from "./types.js";
import { UI } from "./ui.js";

console.log("main loaded");

const game = new Game();
const ui = new UI();

const weaponElements =
    document.querySelectorAll<HTMLImageElement>(".weapon-img");
console.log(document.querySelectorAll(".weapon-img"));
weaponElements.forEach((element) => {
    element.addEventListener("click", () => {
        const weapon: Weapon = element.id as Weapon;
        const result = game.play(weapon);
        const scores = game.getScores();

        ui.showResult(result.result);
        ui.renderScores(scores.userScore, scores.computerScore);

        if (game.getIsGameOver()) {
            ui.showGameOver(game.getWinner()!);
        }

        console.log(`You chose ${weapon}`);
        console.log(`'result: ${result.result}`)
        console.log(`'user: ${result.userWeapon}'`)
        console.log(`'computer: ${result.computerWeapon}'`)
    });
})
