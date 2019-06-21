import { Board } from '../models/board'
import { Player, Tile } from '../models/tile';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class GameService {
    board: Board
    tileSize: number
    player: Player

    constructor() {
        this.player = new Player(0, 0)
        this.tileSize = 64
        this.initGame()
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
    }

}

export enum MoveOptions {
    UP,
    DOWN,
    LEFT,
    RIGHT
}