/**
 * Created by david on 9/10/16.
 */
import {Component, Input} from '@angular/core';
import {BombsService} from "../../services/bombs.service";
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/operator/filter'

@Component({
  selector: 'bomb',
  templateUrl: 'bomb.html'
})
export class BombComponent {

  subscription: Subscription;
  on: boolean = false;

  @Input() id: number;

  constructor(private bombsService: BombsService) {
    this.subscribeObservable();
  }


  deactivate() {
    this.on = false;
  }

  activate() {
    this.on = true;
  }

  private subscribeObservable() {
    this.subscription = this.bombsService.bombActivatedObservable.filter((id: number)=>{return id == this.id }).subscribe(()=> {
      this.activate();
    });
  }
}
