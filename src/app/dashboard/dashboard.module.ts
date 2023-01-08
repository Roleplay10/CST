import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GameCardComponent } from './game-card/game-card.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [DashboardPageComponent, GameCardComponent,ModalComponent],
  imports: [CommonModule, DashboardRoutingModule, NzCardModule, NzButtonModule],
})
export class DashboardModule {}
