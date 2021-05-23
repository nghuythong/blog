import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Homepage/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
