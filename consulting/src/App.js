import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import overview from './Overview';
import Consulting from './Consulting';
import Strategies from './Strategies';
import Clints from './Clints';
import Contact from './Contact';
import {Switch,Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/overview' component={overview}/>
      <Route exact path='/consulting' component={Consulting}/>
      <Route exact path='/strategies' component={Strategies}/>
      <Route exact path='/clints' component={Clints}/>
      <Route exact path='/contact' component={Contact}/>
      <Redirect to="/"/>

    </Switch>
    </>
  );
}

export default App;
