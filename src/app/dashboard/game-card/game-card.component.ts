import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input() game: any;
  @Output() clickedMore = new EventEmitter<any>();
  constructor() {}


  ngOnInit(): void {}

  isVisible = false;

  navigateToGamePage() {
    this.clickedMore.emit(this.game);
  }
}
