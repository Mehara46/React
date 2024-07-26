import Footer from './components/Footer/Footer';
// import Header from './components/Header';
import Home from './components/Home_page/Home';
import About from './components/About_page/About';
import Service from './components/Service_page/Service';
import Events from './components/Events_page/Events';
import Contact from './components/Contact_page/Contact';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className='d-flex flex-column min-vh-100'>
        <Router>
          <div className='flex-grow-1'>
            <Switch>
              <Route exact path="/" component={Home} />   
              <Route path="/About" component={About} /> 
                 <Route path="/Service" component={Service} /> 
                 <Route path="/Events" component={Events} /> 
                 <Route path="/Contact" component={Contact} /> 
                 <Route path="/Contact" component={Contact} />  

            </Switch>
          </div>
          <div>
            <Footer /> 
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
