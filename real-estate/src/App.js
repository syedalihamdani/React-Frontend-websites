 import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
 import './App.css';
import About from './About';
import Plans from './Plans';
import Contact from './Contact';
import Navbar from './Navbar';



 const App=()=>{
   return(
     <>
     <Navbar/>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/About' component={About}/>
       <Route exact path='/Plans' component={Plans}/>
       <Route exact path='/Contact' component={Contact}/>
       <Redirect to='/'/>
       
     </Switch>
     </>
   )
 }
 export default App;