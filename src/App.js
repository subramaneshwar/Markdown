import './App.css';
import { useState } from 'react' 
import Text from './Text';
import Markdownresult from './Markdownresult';

function App() {
  const [input, setInput] = useState("# Markdown Preview")
  return (
    <div className="App">
        <Text input={input} setInput={setInput}/>
        <Markdownresult input={input} setInput={setInput}/>
    </div>
  );
}

export default App;
