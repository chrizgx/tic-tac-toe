import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../config.service';
import { GameService } from '../game.service';
import { RouterModule, Router } from '@angular/router';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  configService: ConfigService = inject(ConfigService);
  gameService: GameService = inject(GameService);
  cpuService: CpuService = inject(CpuService);
  player = this.configService.player;
  router: Router = inject(Router);

  play(cpu: boolean) {
    this.configService.opponent = cpu ? 'CPU' : 'VS';
    this.cpuService.updateVariables();
    this.gameService.createGame();
    setTimeout(() => {
      this.router.navigate(['/play']);
    }, 800);
  }
}
