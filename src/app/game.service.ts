import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';
// import { CpuService } from './cpu.service';
// import { VsService } from './vs.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  router: Router = inject(Router);

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

  declareWin(game: any, winner: boolean): void {
    game.modalConfig.modal = 'WIN';
    game.modalConfig.winner = winner;

    if (winner) game.scoreX++;
    if (!game.turn) game.scoreO++;
  }

  declareTie(game: any): void {
    game.modalConfig.modal = 'TIE';
    game.modalConfig.winner = null;
    game.ties++;
  }

  hideModal(game: any): void {
    game.modalConfig.modal = 'OFF';
  }

  quit(game: any): void {
    this.hideModal(game);
    this.router.navigate(['/menu']);
  }

  nextRound(game: any): void {
    game.modalConfig.modal = 'OFF';
    game.turn = true;
    game.count = 0;
    game.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  constructor() {}
}
