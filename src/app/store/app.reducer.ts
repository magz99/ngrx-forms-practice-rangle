import {
  createFormStateReducerWithUpdate,
  updateGroup,
  validate,
  createFormGroupState
} from 'ngrx-forms';
import { required, greaterThanOrEqualTo } from 'ngrx-forms/validation';
import { Config, Person } from '../models/example.model';
import { RootForm, AppState } from './app-state.interface';

const initialFormState = createFormGroupState<RootForm>('form', {
  person: {
    lastName: 'Lee',
    firstName: '',
    age: null
  },
  config: {
    minAge: 18
  }
});

export const initialState: AppState = {
  form: initialFormState
};

// The `updateGroup` function allows us to define person and config as
// nested forms (so that they can be displayed independently)
const validateAndUpdateFormState = updateGroup<RootForm>({
  person: updateGroup<Person>({
    firstName: validate([required]),
    lastName: validate([required])
  }),
  config: updateGroup<Config>({
    minAge: validate([required, greaterThanOrEqualTo(0)])
  })
});

// createFormStateReducerWithUpdate defines validation rules of our form
// We get back a reducer function that we can use in our rootReducer.
export const formReducer = createFormStateReducerWithUpdate<RootForm>(
  validateAndUpdateFormState
);

export const rootReducer = {
  form: formReducer
};
