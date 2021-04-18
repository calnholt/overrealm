import { Component } from '@angular/core';
import { Path } from './types/dataTypes';
import { ToolbarService } from 'card-builder-framework';
import { Router } from '@angular/router';
import { MonsterService } from './modules/monster/monster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'switchems';
  visible: boolean;
    logo: Path = '../../../../assets/images/website/logo.png';
    monsters: string[] = [];
    monster: any = {};
    // TODO: set dynamically when in pnp component
    isPrint: boolean = false;
  
    constructor(public toolbarService: ToolbarService, private router: Router, private monsterService: MonsterService) { }
  
    ngOnInit() {
      this.router.events.subscribe(() => {
        this.toolbarService.show();
      });
      this.monsterService.getMonsters().forEach(m => this.monsters.push(m.monsterName));
    }
  
    goToMonster() {
      this.router.navigate([`monster/${this.monster.monsterName}`], {});
      this.monster = {};
    }
}
