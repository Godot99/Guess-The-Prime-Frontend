import { Component, Input } from '@angular/core';
import { GameService, MoveOptions } from 'src/app/service/game.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'player-tile',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  @Input() x
  @Input() y
  @Input() styles

  constructor(private game: GameService) {
  }

  ngAfterViewInit() {
    fromEvent(document, 'keyup').subscribe((e: KeyboardEvent) => {

      switch (e.keyCode) {
        case "w".charCodeAt(0):
        case "W".charCodeAt(0):
          this.game.movePlayer(MoveOptions.UP)
          break;
        case "a".charCodeAt(0):
        case "A".charCodeAt(0):
          this.game.movePlayer(MoveOptions.LEFT)
          break;
        case "s".charCodeAt(0):
        case "S".charCodeAt(0):
          this.game.movePlayer(MoveOptions.DOWN)
          break;
        case "d".charCodeAt(0):
        case "D".charCodeAt(0):
          this.game.movePlayer(MoveOptions.RIGHT)
          break;
      }


    })
  }

  getStyles() {
    return Object.assign({}, this.styles, {
      left: this.x * this.game.tileSize + "px",
      top: this.y * this.game.tileSize + "px",
      width: this.game.tileSize + "px",
      height: this.game.tileSize + "px",
    })
  }
}



