import { Component, Input } from '@angular/core';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {

  @Input() height: number;
  @Input() width: number;


  constructor(private game: GameService) { }

}
