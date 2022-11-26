import "./reset.css";
import "./App.css";
import title from "./images/SPLITTER.png";
import Calculator from "./Calculator";
import { Context } from "./Context";

function App() {
  return (
    <div className="app">
      <img className="title-icon" src={title} alt="title-icon" />
      <Calculator />
    </div>
  );
}

export default App;
