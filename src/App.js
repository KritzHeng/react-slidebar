import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router, Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Team from './pages/Team';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/reports' element={< Reports />}></Route>
          <Route exact path='/products' element={< Products />}></Route>
          <Route exact path='/team' element={< Team />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
