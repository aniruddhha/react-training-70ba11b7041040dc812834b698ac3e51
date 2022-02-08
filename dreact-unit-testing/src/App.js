import { useState } from 'react';
import './App.css';

function App() {

  const [sty, setSty] = useState({ border : '1px solid red'  })

  const [ttl, setTtl] = useState('Welcome to react') 

  const onClk = () =>  {
    setTtl('clicked')
    setSty({ border : '1px solid blue' })
  }


  return (
    <>
      <h1 data-testid='ttl'>{ttl}</h1>

      <div>
        <input type='text' style={sty} data-testid='ip'/>
      </div>
      <div>
        <input type='button' value='okay' data-testid='btn' onClick={onClk}/>
      </div>
    </>
  );
}

export default App;
