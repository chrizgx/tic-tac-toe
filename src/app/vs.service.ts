import { Inject, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root',
})
export class VsService {
  // gameService: GameService = inject(GameService);
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
    if (this.checkWin(char, game.tests, game.board)) {
      game.modalConfig.modal="WIN";
      game.modalConfig.winner= game.turn;

      if (game.turn) game.scoreX++;
      if (!game.turn) game.scoreO++;

      return;
    }

    // If board is full and there is no winner
    if (game.count >= 9)  {
      game.modalConfig.modal="TIE";
      game.modalConfig.winner = null;
      game.ties++;
    }

    game.turn = !game.turn;
  }

  checkWin(char: 'X' | 'O', tests: number[][][], board: string[][]): boolean {
    for (let i = 0; i < tests.length; i++) {
      let test: number[][] = tests[i];

      let val1: string = board[test[0][0]][test[0][1]];
      let val2: string = board[test[1][0]][test[1][1]];
      let val3: string = board[test[2][0]][test[2][1]];

      if (val1 === char && val2 === char && val3 === char) {
        return true;
      }
    }

    return false;
  }

  hideModal(game: any) {
    game.modalConfig.modal = 'OFF';
  }

  quit(game: any) {
    this.hideModal(game);
    this.router.navigate(['/menu']);
  }

  nextRound(game: any) {
    game.modalConfig.modal='OFF';
    game.turn = true;
    game.count = 0;
    game.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }

  constructor() {}
}
