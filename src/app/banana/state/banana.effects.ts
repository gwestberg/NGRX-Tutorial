import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { RotService } from "../../rot.service";
import { InitiateTimeHop, INITIATE_TIME_HOP, TimeHopComplete } from "./banana.actions";
import './banana.actions';



@Injectable()
export class BananaEffects {
  constructor(
    private actions$: Actions, 
    private rot: RotService){}

//Listening for the initiation action
@Effect()
public InitiateTimeHop$ = this.actions$.pipe(
  ofType(INITIATE_TIME_HOP),
  switchMap((action: InitiateTimeHop) =>
  this.rot.rotBanana().pipe(
    map(color => new TimeHopComplete(color))
  ),
  ),
);
}