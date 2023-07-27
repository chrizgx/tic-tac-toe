import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root',
})
export class CpuService {
  gameService: GameService = inject(GameService);
  router: Router = inject(Router);

  play(row: number, col: number, game: any) {
    if (game.board[row][col] != '') return;

    game.board[row][col] = 'X';
    game.count++;

    if (this.gameService.checkWin('X', game.tests, game.board)) {
      this.gameService.declareWin(game, game.turn);
      return;
    }

    if (game.count >= 9) {
      this.gameService.declareTie(game);
      return;
    }
  }

  constructor() {}
}
