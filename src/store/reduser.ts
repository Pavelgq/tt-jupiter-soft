import { data } from "../data/mockData";
import { SomeDataI } from "../pages/main/main";


export type Reducer<State, Action> = 
  (state: State, action: Action) => State;

type State = SomeDataI[];

export const initialState: State = data;


export enum ActionKind {
  Add = 'add',
  DeleteItem = 'deleteItem'
}

type Action = {
  type: ActionKind,
  payload: any;
}

export function DataReducer (state: State, action: Action) {
  switch (action.type) {
    case 'add':
      return state.concat(action.payload);
    case 'deleteItem': 
    const index = state.findIndex(el => el.title === action.payload)
      return state.slice(0, index).concat(state.slice(index + 1));
    default:
      return state
  }
}