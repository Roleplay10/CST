import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalComponent } from './modal/modal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

const routes: Routes = [{ component: DashboardPageComponent, path: '' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,NzModalModule],
})
export class DashboardRoutingModule {}
