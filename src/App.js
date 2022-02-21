import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Routing from './components/Routing';
import DetailedWork from './components/DetailedWork';

function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
        <Route exact path="/" element={ <Routing />} />
        <Route exact path="/details/:imageName" element={ <DetailedWork />} />
          
      </Routes>
  
      </Router>
    </div>
  );
}

export default App;
