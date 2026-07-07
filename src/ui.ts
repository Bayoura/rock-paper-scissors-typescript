import { GameResult, Weapon } from "./types";

const resultMessages = {
    win: "You won!",
    lose: "You lost!",
    draw: "It's a draw!"
};

export class UI {
    private userScoreElement: HTMLSpanElement;
    private computerScoreElement: HTMLSpanElement;
    private roundResultElement: HTMLParagraphElement;
    private overlayElement: HTMLDivElement;
    private winnerTextElement: HTMLHeadingElement;
    private restartButtonElement: HTMLButtonElement;
    private userMarkerElements: NodeListOf<HTMLSpanElement>;
    private computerMarkerElements: NodeListOf<HTMLSpanElement>;
    private weaponElements: NodeListOf<HTMLImageElement>;
    private infoTextElement: HTMLParagraphElement;

    constructor() {
        //Get DOM elements
        this.userScoreElement = document.querySelector<HTMLSpanElement>("#user-score")!;
        this.computerScoreElement = document.querySelector<HTMLSpanElement>("#computer-score")!;
        this.roundResultElement = document.querySelector<HTMLParagraphElement>("#round-result")!;
        this.overlayElement = document.querySelector<HTMLDivElement>("#game-over-overlay")!;
        this.winnerTextElement = document.querySelector<HTMLHeadingElement>("#winner-text")!;
        this.restartButtonElement = document.querySelector<HTMLButtonElement>("#restart-button")!;
        this.userMarkerElements = document.querySelectorAll<HTMLSpanElement>(".user-marker")!;
        this.computerMarkerElements = document.querySelectorAll<HTMLSpanElement>(".computer-marker")!;
        this.weaponElements = document.querySelectorAll<HTMLImageElement>(".weapon-img")!;
        this.infoTextElement = document.querySelector<HTMLParagraphElement>("#info-text")!;
    }

    renderScores(userScore: number, computerScore: number): void {
        this.userScoreElement.textContent = String(userScore);
        this.computerScoreElement.textContent = String(computerScore);
    }

    showResult(result: GameResult["result"]): void {
        console.log(`${resultMessages[result]}`);
        this.roundResultElement.textContent = resultMessages[result];
    }

    clearResult(): void {
    this.roundResultElement.textContent = "";
}

    resetUI(): void {
        this.renderScores(0, 0);
        this.clearResult();
    }

    showGameOver(winner: string): void {
        const message: string = winner == "user" ? "Congratulations! You won!" : "Oh no, the computer won!";
        this.winnerTextElement.textContent = message;
        this.showOverlay();
    }

    private showOverlay(): void {
        this.overlayElement.classList.add("active");
    }

    hideOverlay(): void {
        this.overlayElement.classList.remove("active");
    }

    // Receives a callback function from outside and executes it when the restart button is clicked
    onRestart(callback: () => void): void {
        this.restartButtonElement.addEventListener("click", callback);
    }

    clearMarkers(): void {
        this.userMarkerElements.forEach((marker) => {
            marker.classList.remove("visible");
        });
        this.computerMarkerElements.forEach((marker) => {
            marker.classList.remove("visible");
        })
    }

    showUserMarker(weapon: Weapon): void {
        console.log(`#${weapon} + div .user-marker`);
        const marker = document.querySelector(`#${weapon} + div .user-marker`);
        marker?.classList.add("visible");
    }

    showComputerMarker(weapon: Weapon): void {
        const marker = document.querySelector(`#${weapon} + div .computer-marker`);
        marker?.classList.add("visible");
    }

    disableWeapons(): void {
        this.weaponElements.forEach((weapon) => {
            weapon.classList.add("disabled");
        })
    }

    enableWeapons(): void {
        this.weaponElements.forEach((weapon) => {
            weapon.classList.remove("disabled");
        })
    }

    setInfoText(text: string): void {
        this.infoTextElement.textContent = text;
    }
}
