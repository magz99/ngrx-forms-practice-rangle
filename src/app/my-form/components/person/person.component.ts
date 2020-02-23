import { FormGroupState } from 'ngrx-forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/example.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent {
  personForm$: Observable<FormGroupState<Person>>;

  constructor(private store: Store<AppState>) {
    /* Because our form lives in the store, we need to select the relevant FormGroupState
    that we wish to use in this component.*/
    this.personForm$ = store.pipe(
      select(state => state.form.controls.person as FormGroupState<Person>)
    );
  }
}
