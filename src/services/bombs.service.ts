/**
 * Created by david on 9/10/16.
 */

import {Injectable} from '@angular/core'
import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class BombsService {

  private bombExplodedSource = new Subject<void>();
  private bombActivatedSource = new Subject<number>();

  bombExplodedObservable: Observable<void> = this.bombExplodedSource.asObservable();
  bombActivatedObservable: Observable<number> = this.bombActivatedSource.asObservable();

  /**
   * @param index: el id de la bomba que se va a activar
   */
  activateBomb(index: number) {
    this.bombActivatedSource.next(index);
  }

  explodeBomb(){
    this.bombExplodedSource.next();
  }
}
