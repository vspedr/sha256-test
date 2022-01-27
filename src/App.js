import jsSHA from 'jssha'
import shajs from 'sha.js'

import './App.css';

function App() {
  const testString = '{__typename}'
  const shaObj = new jsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
  shaObj.update(testString);
  const hash1 = shaObj.getHash("HEX");
  
  // console.log(shajs('sha256').update('42').digest('hex'))
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>sha.js</h1>
        <p>
          {shajs('sha256').update(testString).digest('hex')}
        </p>
        <h1>jssha</h1>
        <p>
          {hash1}
        </p>
      </header>
    </div>
  );
}

export default App;
