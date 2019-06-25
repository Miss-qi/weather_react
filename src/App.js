import React from 'react';
import './App.css';
import { view as Weather} from "./weather/";
import CitySelector from "./weather/CitySelector";

function App() {
  return (
    <div className="App">
      <Weather/>
      <CitySelector/>
    </div>
  );
}

export default App;
