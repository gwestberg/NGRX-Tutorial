import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RotService{

rotBanana(): Observable<any> {
  console.log('ROT BANANA');
const ms = 10000; //10 sec
return Observable.create(observer =>{
  setTimeout(() => {
    console.log('Done Waiting');
    observer.next('brown');
  observer.complete();
  }, ms);
});
}

}