import { Board } from '../models/board'
import { Player, Tile, NumberTile } from '../models/tile';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class GameService {
    board: Board
    tileSize: number
    player: Player
    numberTile: NumberTile

    constructor() {
        this.player = new Player(0, 0)
        this.tileSize = 64
        this.initGame()
        this.numberTile = new NumberTile((Math.random() * 10) + 1, (Math.random() * 10) + 1, 'ss', true)

    }

    initGame() {
        this.board = new Board(10, 10)
    }

    isMoveValid(x, y) {
        if (x >= this.board.numRows || y >= this.board.numColumn || x < 0 || y < 0) {
            return false
        } else {
            return true
        }
    }

    movePlayer(direction: MoveOptions) {
        switch (direction) {
            case MoveOptions.RIGHT:
                if (this.isMoveValid(this.player.x + 1, this.player.y)) this.player.x += 1
                break;
            case MoveOptions.DOWN:
                if (this.isMoveValid(this.player.x, this.player.y + 1)) this.player.y += 1
                break;
            case MoveOptions.LEFT:
                if (this.isMoveValid(this.player.x - 1, this.player.y)) this.player.x -= 1
                break;
            case MoveOptions.UP:
                if (this.isMoveValid(this.player.x, this.player.y - 1)) this.player.y -= 1
                break;
        }

        const currentTile = this.board.grid[this.player.x][this.player.y];

        if (currentTile.hasVisited) return;
        if (currentTile.innerText === null) return;

        currentTile.hasVisited = true

        if (this.board.isPrime(currentTile.innerText)) {
            currentTile.styles.backgroundColor = "#0f0"
        } else {
            currentTile.styles.backgroundColor = "#f00"
        }

    }

}

export enum MoveOptions {
    UP,
    DOWN,
    LEFT,
    RIGHT
}