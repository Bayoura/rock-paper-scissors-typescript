import { Game } from "./game.js";
import { Weapon } from "./types.js";
import { UI } from "./ui.js";

const game = new Game();
const ui = new UI();

const weaponElements =
    document.querySelectorAll<HTMLImageElement>(".weapon-img");

weaponElements.forEach((element) => {
    element.addEventListener("click", async () => {
        ui.disableWeapons();
        const weapon: Weapon = element.id as Weapon;
        const result = game.play(weapon);
        const scores = game.getScores();

        ui.showUserMarker(result.userWeapon);
        ui.setInfoText("Computer is choosing...");

        await delay(800);

        ui.showComputerMarker(result.computerWeapon);

        await delay(500);

        ui.showResult(result.result);
        ui.renderScores(scores.userScore, scores.computerScore);

        await delay(1000);

        ui.clearMarkers();
        ui.setInfoText("Choose your weapon...");
        ui.clearResult();

        if (game.getIsGameOver()) {
            ui.showGameOver(game.getWinner()!);
        } else {
            ui.enableWeapons();
        }
    });
})

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Defines what should happen when the restart button is clicked
ui.onRestart(() => {
    game.reset();
    ui.resetUI();
    ui.hideOverlay();
    ui.clearMarkers();
    ui.enableWeapons();
})