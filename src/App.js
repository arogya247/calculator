import { Calculator } from "./Components/Calculator";
import { Login } from "./Components/Login";
import { Registration } from "./Components/Registration";
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";


function App() {

  

  return (
    <div className="App">
    <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/reg" element={<Registration />} />
      <Route exact path="/calculator" element={<Calculator />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
