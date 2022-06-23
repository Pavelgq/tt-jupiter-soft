import { data } from "../data/mockData";
import { SomeDataI } from "../pages/main/main";


export type Reducer<State, Action> = 
  (state: State, action: Action) => State;

type State = SomeDataI[];

export const initialState: State = data;


export enum ActionKind {
  Add = 'add',
}

type Action = {
  type: ActionKind,
  payload: SomeDataI[];
}

export function DataReducer (state: State, action: Action) {
  switch (action.type) {
    case 'add':
      return state.concat(action.payload);
  
    default:
      return state
  }
}