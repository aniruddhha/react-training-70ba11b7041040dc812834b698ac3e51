import React from 'react'; // what is this?
import ReactDOM from 'react-dom'; // what is this ?
import { FnComp, ClsComp } from './comp'

let os = 'android'

const onBtnClk = () =>  {
  os = 'ios' // problem: here is problem h1 is not not getting updated
  console.log(os) // printing on browser console i.e. in the inspector
}

const ui = (
    <div>
      {'inside these brackets there is javascript world'}
      <h1>{os.toUpperCase()}</h1>
      <input type='button' value='okay' onClick={onBtnClk}/>
      {/* <input type='button' value='okay' onClick={() => onBtnClk()}/> */}
    </div>
) // jsx

const container =  document.getElementById('root')

ReactDOM.render(
  <div>
    <FnComp/>
    <ClsComp/>
  </div>, 
  container
);

