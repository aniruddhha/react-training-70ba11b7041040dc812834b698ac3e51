import { useState } from 'react';
import './App.css';

function App() {

  const [ttl, setTtl] = useState('Welcome to react') 

  const onClk = () => setTtl('clicked')

  return (
    <>
      <h1 data-testid='ttl'>{ttl}</h1>

      <div>
        <input type='button' value='okay' data-testid='btn' onClick={onClk}/>
      </div>
    </>
  );
}

export default App;
