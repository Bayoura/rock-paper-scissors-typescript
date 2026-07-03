import { GameResult, Weapon } from "./types";

const winningCombinations: Record<Weapon, Weapon> = {
    axe: "sword", // axe defeated by sword
    sword: "lance", // sword defeated by lance
    lance: "axe", // lance defeated by axe
}

export class Game {
    play(weapon: Weapon): GameResult {
        const validWeapons = Object.keys(winningCombinations) as Weapon[];
        const computerWeapon: Weapon = validWeapons[Math.floor(Math.random() * validWeapons.length)];

        if (weapon === computerWeapon) {
            return {
                result: "draw",
                playerWeapon: weapon,
                computerWeapon: computerWeapon
            }
        }
        if (weapon === winningCombinations[computerWeapon]) {
            return { result: "win", playerWeapon: weapon, computerWeapon: computerWeapon }
        }

        return { result: "lose", playerWeapon: weapon, computerWeapon: computerWeapon }

    }
}