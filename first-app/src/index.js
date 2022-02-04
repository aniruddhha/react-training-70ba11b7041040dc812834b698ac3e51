import React from 'react'; // what is this?
import ReactDOM from 'react-dom'; // what is this ?

const onBtnClk = () => console.log('button clicked')

const os = 'android'
const ui = (
    <div>
      {'inside these brackets there is javascript world'}
      <h1>{os.toUpperCase()}</h1>
      <input type='button' value='okay' onClick={onBtnClk}/>
      {/* <input type='button' value='okay' onClick={() => onBtnClk()}/> */}
    </div>
) // jsx

const container =  document.getElementById('root')

ReactDOM.render(ui, container);

