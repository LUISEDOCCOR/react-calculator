import './App.css';
import Button from './components/butons';
import Display from './components/display';
import { useState } from 'react';
import { evaluate } from 'mathjs'


function App() {

  const [operation, setValueoperation] = useState('')

  const addValue =  (value) =>{
    setValueoperation(operation + value)
  }

  const deleteOperation = () =>{
    setValueoperation('')
  }

  const makeOperation = () =>{
    if (operation){
      try{
        setValueoperation(evaluate(operation))
      }catch{
        setValueoperation('')
      }
    }
  }

  return (
    <div className="App">
     <div className='conatiner'>
      <Display value={operation} />
     <div className='conatiner-btns'>
      <div className='row'> 
          <Button callback={deleteOperation}>C</Button>
          <Button callback={addValue}>^</Button>
          <Button callback={addValue}>%</Button>
          <Button callback={addValue}>/</Button>
        </div>
        <div className='row'> 
          <Button callback={addValue}>7</Button>
          <Button callback={addValue}>8</Button>
          <Button callback={addValue}>9</Button>
          <Button callback={addValue}>*</Button>
        </div>
        <div className='row'> 
          <Button callback={addValue}>4</Button>
          <Button callback={addValue}>5</Button>
          <Button callback={addValue}>6</Button>
          <Button callback={addValue}>-</Button>
        </div>
        <div className='row'> 
        <Button callback={addValue}>1</Button>
        <Button callback={addValue}>2</Button>
        <Button callback={addValue}>3</Button>
        <Button callback={addValue}>+</Button>
        </div>
        <div className='row'> 
          <Button callback={addValue}>0</Button>
          <Button callback={addValue}>.</Button>
          <Button important={true} callback={makeOperation}> = </Button>
        </div>
      </div> 
     </div> 
    </div>
  );
}

export default App;
