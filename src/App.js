import logo from "./logo.svg";
import "./App.css";
import MainContentSubParent from "./mainContent";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainContentSubParent />
      </BrowserRouter>
    </div>
  );
}

export default App;
