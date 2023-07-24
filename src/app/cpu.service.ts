import { inject, Injectable } from '@angular/core';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root',
})
export class CpuService {
  // gameService: GameService = inject(GameService);

  play(row: number, col: number, game: any) {
    game.board[row][col] = 'X';
  }

  quit(game: any) {}

  nextRound(game: any) {
    
  }

  constructor() {}
}
