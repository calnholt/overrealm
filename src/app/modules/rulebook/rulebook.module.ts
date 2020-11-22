import { RulebookActionComponent } from './rulebook-image/rulebook-action/rulebook-action.component';
import { RulebookImageComponent } from './rulebook-image/rulebook-image.component';
import { RulebookListComponent } from './rulebook-list/rulebook-list.component';
import { RulebookRoutes } from './rulebook.routing';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonsterModule } from '../monster/monster.module';
import { CommonComponentsModule } from '../common/common-components.module';
import { RulebookComponent } from './rulebook.component';
import { RulebookNumberComponent } from './rulebook-image/rulebook-number/rulebook-number.component';
import { RulebookMonsterComponent } from './rulebook-image/rulebook-monster/rulebook-monster.component';

@NgModule({
    imports: [
      RouterModule.forChild(RulebookRoutes),
      CommonModule,
      RouterModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      MonsterModule,
      CommonComponentsModule,
    ],
    declarations: [
      RulebookComponent,
      RulebookNumberComponent,
      RulebookListComponent,
      RulebookMonsterComponent,
      RulebookImageComponent,
      RulebookActionComponent,
    ],
    exports: [
      RulebookComponent,
      RulebookNumberComponent,
      RulebookListComponent,
      RulebookMonsterComponent,
      RulebookImageComponent,
      RulebookActionComponent,
    ]
  })
export class RulebookModule { }