/**
 * Created by david on 8/10/16.
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BombsService} from "../../services/bombs.service";


@Component({
  selector: 'game-page',
  templateUrl: 'game.html',
  providers: [BombsService]
})

export class GamePage {

  constructor(public navCtrl: NavController, private bombsService: BombsService) {

  }

  asdf = 1;

  activate() {
    this.asdf = 1 - this.asdf;
    this.bombsService.activateBomb(this.asdf);
  }

}
