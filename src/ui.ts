export class UI {
    private userScoreElement: HTMLSpanElement;
    private computerScoreElement: HTMLSpanElement;
    private roundResultElement: HTMLDivElement;
    private overlayElement: HTMLDivElement;
    private winnerTextElement: HTMLHeadingElement;
    private restartButtonElement: HTMLButtonElement;

    constructor() {
        //Get DOM elements
        this.userScoreElement = document.querySelector<HTMLSpanElement>("#user-score")!;
        this.computerScoreElement = document.querySelector<HTMLSpanElement>("#computer-score")!;
        this.roundResultElement = document.querySelector<HTMLDivElement>("#round-result")!;
        this.overlayElement = document.querySelector<HTMLDivElement>("#game-over-overlay")!;
        this.winnerTextElement = document.querySelector<HTMLHeadingElement>("#winner-text")!;
        this.restartButtonElement = document.querySelector<HTMLButtonElement>("#restart-button")!;
    }

    renderScores(userScore: number, computerScore: number): void {
        this.userScoreElement.textContent = String(userScore);
        this.computerScoreElement.textContent = String(computerScore);
    }

    showResult(result: string): void {
        this.roundResultElement.textContent = result;
    }

    resetUI(): void {
        this.renderScores(0, 0);
        this.showResult("");
    }

    showGameOver(winner: string): void {
        console.log("GAME OVER");
        const message: string = winner == "user" ? "You won!" : "Computer won!";
        this.winnerTextElement.textContent = message;
        this.showOverlay();
    }

    private showOverlay(): void {
        this.overlayElement.classList.add("active");
    }

    hideOverlay(): void {
        this.overlayElement.classList.remove("active");
    }

    onRestart(callback: () => void): void {
        this.restartButtonElement.addEventListener("click", callback);
    }
}
