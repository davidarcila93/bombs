/**
 * Created by david on 15/10/16.
 */

import {Component} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import {Subscription} from 'rxjs/Subscription'
import {BombsService} from "../../services/bombs.service";
import 'rxjs/add/observable/interval'

@Component({
  selector: 'bombs-matrix',
  templateUrl: 'bombs-matrix.html',
  providers: [BombsService]
})
export class BombsMatrix {
  x: number = 4;
  y: number = 5;

  intervalSubscription: Subscription;

  xArray: number[] = Array(this.x).map((val, index)=> {
    return index;
  });
  yArray: number[] = Array(this.y).map((val, index)=> {
    return index;
  });

  constructor(private bombsService: BombsService) {
  }

  ngOnInit(){
    this.startTimer();
  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();
  }

  startTimer() {
    this.intervalSubscription = Observable.interval(1000).subscribe((val)=> {
      this.bombsService.activateBomb(Math.floor(Math.random()*this.x*this.y));
    });
  }

}
