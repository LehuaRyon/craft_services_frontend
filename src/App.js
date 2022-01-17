import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ServicesList} from './containers/ServicesList'
import {Home} from './components/navigation/Home'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route path="/services">
            <ServicesList />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/gallery">
            <Gallery />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/commissions">
            <Commissions />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
