import { Injectable, inject } from '@angular/core';
import { ConfigService } from './config.service';
import { CpuService } from './cpu.service';
import { VsService } from './vs.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  configService: ConfigService = inject(ConfigService);
  controller: VsService | CpuService =
    this.configService.opponent == 'CPU'
      ? inject(CpuService)
      : inject(VsService);

  turn: boolean = true;
  scoreX: number = 0;
  scoreY: number = 0;
  game: boolean = false;
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  constructor() { }
}
