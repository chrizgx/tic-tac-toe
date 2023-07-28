import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../config.service';
import { VsService } from '../vs.service';
import { CpuService } from '../cpu.service';
import { GameService } from '../game.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  // gs: GameService = inject(GameService);

  configService: ConfigService = inject(ConfigService);
  gs: VsService | CpuService =
    this.configService.opponent == 'CPU'
      ? inject(CpuService)
      : inject(VsService);

  game: any = {
    player: this.configService.player,
    opponent: this.configService.opponent,
    turn: true,
    scoreX: 0,
    scoreO: 0,
    ties: 0,
    game: false,
    modalConfig: {
      modal: '', // 'WIN', 'TIE', 'RE', 'OFF'
      winner: null,
    },
    count: 0,
    board: [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],

    tests: [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],

      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],

      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [2, 0],
        [1, 1],
        [0, 2],
      ],
    ],
  };

  titleX =
    this.game.player == 'X'
      ? 'YOU'
      : this.game.opponent == 'CPU'
      ? 'CPU'
      : 'P1';
  titleO =
    this.game.player == 'O'
      ? 'YOU'
      : this.game.opponent == 'CPU'
      ? 'CPU'
      : 'P2';

  
}
