import { FormGroupState } from 'ngrx-forms';
import { Person } from '../models/example.model';
import { Config } from '../models/example.model';

// The application state will have a single property called "form"
// FormGroup is a collection of named controls
// FormGroupState: logical grouping of multiple named form states
export interface AppState {
  form: FormGroupState<RootForm>;
}

export interface RootForm {
  person: Person;
  config: Config;
}
