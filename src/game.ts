import { GameResult, Weapon } from "./types.js";

const winningCombinations: Record<Weapon, Weapon> = {
    axe: "sword", // axe defeated by sword
    sword: "lance", // sword defeated by lance
    lance: "axe", // lance defeated by axe
}

export class Game {
    private userScore: number = 0;
    private computerScore: number = 0;
    private isGameOver: boolean = false;
    private winner: "user" | "computer" | null = null;

    play(weapon: Weapon): GameResult {
        const validWeapons = Object.keys(winningCombinations) as Weapon[];
        const computerWeapon: Weapon = validWeapons[Math.floor(Math.random() * validWeapons.length)];
        let result: GameResult;

        if (weapon === computerWeapon) {
            result = {
                result: "draw",
                userWeapon: weapon,
                computerWeapon: computerWeapon
            }
        } else if (weapon === winningCombinations[computerWeapon]) {
            this.userScore++;
            result = { result: "win", userWeapon: weapon, computerWeapon: computerWeapon }
        } else {
            this.computerScore++;
            result = { result: "lose", userWeapon: weapon, computerWeapon: computerWeapon }
        }

        this.checkGameOver();

        return result;
    }

    getScores() {
        return {
            userScore: this.userScore,
            computerScore: this.computerScore
        };
    }

    private checkGameOver(): void {
        if (this.userScore >= 5) {
            this.isGameOver = true;
            this.winner = "user";
        } else if (this.computerScore >= 5) {
            this.isGameOver = true;
            this.winner = "computer";
        }
    }

    getIsGameOver(): boolean {
        return this.isGameOver;
    }
    getWinner(): "user" | "computer" | null {
        return this.winner;
    }

    reset() {
        this.userScore = 0;
        this.computerScore = 0;
        this.isGameOver = false;
        this.winner = null;
    }

}