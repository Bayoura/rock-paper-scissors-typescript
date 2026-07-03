export type Weapon = "sword" | "lance" | "axe";

export type GameResult = {
    result: "win" | "lose" | "draw";
    playerWeapon: Weapon;
    computerWeapon: Weapon;
}