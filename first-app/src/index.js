import React from 'react'; // what is this?
import ReactDOM from 'react-dom'; // what is this ?

const ui = (
    <div>
      <input type='text'/> 
      <input type='button' value='okay'/>
    </div>
) // jsx

const container =  document.getElementById('root')

ReactDOM.render(ui, container);

