import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [updateText, setUpdateText] = useState("");
  const [updateNum, setUpdateNum] = useState("");

  const handleInput = (event) =>{
   // use console.log
    let txt = event.target.value;
    setUpdateText(txt);
   console.log("Input in #text-input is ", txt);

  }

  const handleInput1 = (event) =>{
    // use console.log
     let num = event.target.value;
    setUpdateNum(num);
    console.log("Input in #num-input is", num.toString());
 
   }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" onChange={handleInput} type={'text'} value={updateText}/>

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input" type={'number'} onChange={handleInput1} value={updateNum}/>
      <br/>
    </div>
  )
}


export default App;
