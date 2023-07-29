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
  gameService: GameService = inject(GameService);

  game = this.gameService.game;

  gs: VsService | CpuService =
    this.configService.opponent == 'CPU'
      ? inject(CpuService)
      : inject(VsService);

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
