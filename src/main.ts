import { Game } from "./game.js";
import { Weapon } from "./types.js";
import { UI } from "./ui.js";

const game = new Game();
const ui = new UI();

const weaponElements =
    document.querySelectorAll<HTMLImageElement>(".weapon-img");

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
    });
})

// Defines what should happen when the restart button is clicked
ui.onRestart(() => {
    game.reset();
    ui.resetUI();
    ui.hideOverlay();
})