//@ts-nocheck
import { makeObservable, observable, action, computed } from "mobx";

class AppStore {
  counter = 0;

  constructor() {
    makeObservable(this, {
      counter: observable,
      incrementCounter: action,
      decrementCounter: action,
      isPositive: computed,
    });
  }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }

  get isPositive() {
    return this.counter >= 0;
  }
}

const appStore = new AppStore();
export default appStore;

import React from "react";
import { observer, inject } from "mobx-react";

function Counter({ store }) {
  const { counter, incrementCounter, decrementCounter, isPositive } = store;

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <p>Counter is {isPositive ? "positive" : "negative"}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

export default inject("store")(observer(Counter));
