import { GameResult } from "./types";

export class UI {
    private userScoreElement: HTMLSpanElement;
    private computerScoreElement: HTMLSpanElement;
    private roundResultElement: HTMLDivElement;

    constructor() {
        //Get DOM elements
        this.userScoreElement = document.querySelector<HTMLSpanElement>("#user-score")!;
        this.computerScoreElement = document.querySelector<HTMLSpanElement>("#computer-score")!;
        this.roundResultElement = document.querySelector<HTMLDivElement>("#round-result")!;
    }

    renderScores(userScore: number, computerScore: number): void {
        this.userScoreElement.textContent = String(userScore);
        this.computerScoreElement.textContent = String(computerScore);
    }

    showResult(result: string): void {
        this.roundResultElement.textContent = result;
    }
}
