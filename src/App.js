import logo from './logo.svg';
import './App.css';
import Checkbox  from './CommonControls/Checkbox/checkbox';
import {useState} from 'react'


function App() {
  const [IsDefaultChecked, setIsDefaultChecked] = useState(true);
 
  function AfterUserCheckEvent(Passedvalue)
  {
    debugger;
    console.log(Passedvalue);
    setIsDefaultChecked(Passedvalue)
    alert(IsDefaultChecked);
  }
  return (
    <div className="App">
      <Checkbox IsDefaultChecked={IsDefaultChecked} discription={"Are you married"} isSingleList={true} checklistItems={null} result={AfterUserCheckEvent} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
