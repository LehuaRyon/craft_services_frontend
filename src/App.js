import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Router>
        <Navbar />
        <Header />
          <Route>
            
          </Route>
        <Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
