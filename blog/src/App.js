import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Navbar/>
          <Route path="/" exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
