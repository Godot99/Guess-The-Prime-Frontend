import { Component, OnInit, Input } from '@angular/core';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {

  @Input() x;
  @Input() y;
  @Input() styles;
  @Input() innerText: string;

  constructor(private game: GameService) {
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
