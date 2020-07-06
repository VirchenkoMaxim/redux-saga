import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/ConfigureStore.js';
import MyComp from './Component';

function App() {
  return (
    <Provider store={store}  >
      <MyComp />
    </Provider>
  )
}

export default App;
