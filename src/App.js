import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';

function App()
{
  let [counter, setCounter] = useState(0)

  const handleIncrement = () =>
  {
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <div className="App">
      <Header />
      <Counter count={counter} increment={handleIncrement} />
      <Counter count={counter} increment={handleIncrement} />
    </div>
  );
}

export default App;
