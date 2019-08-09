import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string = 'Machine à laver';
  @Input() appareilStatus: string = 'éteint';
  loveits = 0 ;
  lastUpdate = new Date();

  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor() {
    if(this.loveits >= 0) {
      return 'green';
    } else return 'red';
  }

  onLike() {
    this.loveits = this.loveits + 1 ;
    console.log(this.loveits);
  }

  onDislike() {
    this.loveits = this.loveits - 1 ;
    console.log(this.loveits);
  }


}
