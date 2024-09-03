import './App.css';
import { createPage } from './rendering/service';
import { alert } from "./mock/alert"
import { button } from "./mock/button"


function App() {
  return (
    <div className="App">

      
      <h1>Generating examples</h1>
      <h2>one</h2>
      <div>
        {createPage(alert)}
      </div>
      <h2>two</h2>
      <div>
        {createPage(button)}
      </div>
    </div>
  );
}

export default App;
