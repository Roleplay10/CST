import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isVisible = false;

  @Input() game: any;

  constructor(private router: Router) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.router.navigateByUrl('/game-page');
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  ngOnInit(): void {
  }
}
