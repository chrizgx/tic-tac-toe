import { Inject, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root',
})
export class VsService {
  gameService: GameService = inject(GameService);
  router: Router = inject(Router);

  play(row: number, col: number, game: any) {
    // Check if position is already occupied
    if (game.board[row][col] != '') return;

    // Fill position
    game.board[row][col] = game.turn ? 'X' : 'O';
    // Counter to declare a tie
    game.count++;

    // Check Win State
    const char = game.turn ? 'X' : 'O';
    if (this.gameService.checkWin(char, game.tests, game.board)) {
      this.gameService.declareWin(game, game.turn);

      return;
    }

    // If board is full and there is no winner
    if (game.count >= 9) {
      this.gameService.declareTie(game);
      return;
    }

    game.turn = !game.turn;
  }

  constructor() {}
}
