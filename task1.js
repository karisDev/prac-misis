//@ts-nocheck
import { createContext } from 'react';

const MyContext = createContext();

export default MyContext;


import React, { useState } from 'react';
import MyContext from './MyContext';

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('Hello, React Context!');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;


import React from 'react';
import MyContextProvider from './context/MyContextProvider';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <MyContextProvider>
      <MainComponent />
    </MyContextProvider>
  );
}

export default App;


import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const MainComponent = () => {
  const { data, setData } = useContext(MyContext);

  const handleButtonClick = () => {
    setData('New data from button click!');
  };

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={handleButtonClick}>Change Data</button>
    </div>
  );
};

export default MainComponent;
