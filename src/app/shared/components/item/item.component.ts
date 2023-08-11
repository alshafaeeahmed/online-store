import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() data: any = {};
  @Output() item = new EventEmitter
  ngOnInit(): void {}
  add(){
     this.item.emit(this.data)
  }
}
