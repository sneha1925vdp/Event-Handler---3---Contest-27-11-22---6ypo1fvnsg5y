import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleInput = (event) =>{
   // use console.log
    let txt = event.target.value;
   console.log("#text-input is", txt);

  }

  const handleInput1 = (event) =>{
    // use console.log
     let num = event.target.value;
    console.log("#num-input 1 is", num.toString());
 
   }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" onChange={handleInput} type={'text'} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input" type={'number'} onChange={handleInput1}/>
      <br/>
    </div>
  )
}


export default App;
