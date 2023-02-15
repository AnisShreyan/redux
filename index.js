const redux = require("redux");
const createStore = redux.createStore;

//Action
const IncNum = () => {
  return {
    type: "INCREASE",
    payload: 1,
  };
};

const DecNum = () => {
  return {
    type: "DECREASE",
    payload: 1,
  };
};

//State
initalValue = 10;

//Reducer
const Reducer = (state = initalValue, action) => {
  switch (action.type) {
    case "INCREASE":
      return (state = state + 1);
      break;
    case "DECREASE":
      return (state = state - 1);
      break;
    default:
      return state;
      break;
  }
};

//Store

const store = createStore(Reducer);

//Dispatch

const sub = store.subscribe(() => console.log(store.getState()));

store.dispatch(IncNum());
store.dispatch(IncNum());
store.dispatch(IncNum());
store.dispatch(DecNum());
store.dispatch(IncNum());
store.dispatch(IncNum());
store.dispatch(IncNum());


sub();
