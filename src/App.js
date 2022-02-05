// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ServicesContainer} from './containers/ServicesContainer'
// import {ServiceCard} from './components/services/ServiceCard'
import {ServiceShow} from './components/services/ServiceShow'
import {Home} from './components/navigation/Home'
import {About} from './components/navigation/About'
import {Commissions} from './components/navigation/Commissions'
import {Contact} from './components/navigation/Contact'
import {Gallery} from './components/navigation/Gallery'
import {Shop} from './components/navigation/Shop'
import {Navbar} from './components/layout/Navbar'
import {Header} from './components/layout/Header'
import {Footer} from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Router>
        <Navbar />
        {/* <Header storeName="Mariah Ryon's Craft Services"/> */}
        <Switch>
          {/* <Route path="/services/graphicdesign">
            <GraphicDesign />
          </Route> */}

          <Route path="/services/:id">
            {/* <ServiceCard /> */}
            <ServiceShow />
          </Route>
          
          <Route path="/services">
            <ServicesContainer />
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
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
