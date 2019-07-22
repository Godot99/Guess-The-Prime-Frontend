import { Tile, Player } from './tile';


const NUMBER_CHANCE = 30

export class Board {
    grid: Tile[][];

    constructor(public numRows: number, public numColumn: number) {
        this.grid = []
        for (let i = 0; i < numRows; i++) {
            this.grid[i] = []
            for (let j = 0; j < numColumn; j++) {
                const number = this.generateNumber()
                this.grid[i][j] = new Tile(i, j, number);
            }
        }
    }

    isToBeANumber() {
        return Math.floor(Math.random() * 100.0) < NUMBER_CHANCE;
    }

    isPrime(n) {
        if (n === 1) {
            return false;
        }
        else if (n === 2) {
            return true;
        } else {
            for (let x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    generateNumber() {
        if (!this.isToBeANumber()) {
            return null;
        }

        return Math.floor(Math.random() * 30
        )
    }
}