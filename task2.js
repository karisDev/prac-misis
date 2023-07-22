//@ts-nocheck
import { makeObservable, observable, action } from "mobx";

class AppStore {
  counter = 0;

  constructor() {
    makeObservable(this, {
      counter: observable,
      incrementCounter: action,
      decrementCounter: action,
    });
  }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }
}

const appStore = new AppStore();
export default appStore;


import React from "react";
import { Provider } from "mobx-react";
import appStore from "./store";
import Counter from "./Counter"; // Предположим, что у вас есть компонент Counter

function App() {
  return (
    <Provider store={appStore}>
      <Counter />
    </Provider>
  );
}

export default App;


import React from "react";
import { observer, inject } from "mobx-react";

function Counter({ store }) {
  const { counter, incrementCounter, decrementCounter } = store;

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

export default inject("store")(observer(Counter));
