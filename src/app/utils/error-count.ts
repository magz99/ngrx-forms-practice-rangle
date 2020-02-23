import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/app-state.interface';
import { AbstractControlState, FormGroupState } from 'ngrx-forms';

@Injectable()
export class InvalidFieldsSelector {
  appErrors$: Observable<number>;
  personErrors$: Observable<number>;
  configErrors$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.appErrors$ = store.pipe(
      select(state => countValidationErrors(state.form))
    );
    this.personErrors$ = store.pipe(
      select(state => countValidationErrors(state.form.controls.person))
    );
    this.configErrors$ = store.pipe(
      select(state => countValidationErrors(state.form.controls.config))
    );
  }
}

// We don't want to count error messages if the user has not yet interacted with the form.
function countValidationErrors(control: AbstractControlState<any>): number {
  const subControl = (control as FormGroupState<any>).controls;
  if (control.isPristine) {
    return 0;
  }
  if (!subControl) {
    return Object.keys(control.errors).length;
  }
  return Object.keys(subControl).reduce((errors, key) => {
    return countValidationErrors(subControl[key]) + errors;
  }, 0);
}
