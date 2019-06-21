import { Tile, Player } from './tile';


export class Board {
    grid: Tile[][];

    constructor(public numRows: number, public numColumn: number) {
        this.grid = []
        for (let i = 0; i < numRows; i++) {
            this.grid[i] = []
            for (let j = 0; j < numColumn; j++) {
                this.grid[i][j] = new Tile(i, j);
            }
        }
    }
}