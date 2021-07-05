 import React from 'react';
 import { Switch,Route,Redirect} from 'react-router-dom';
 import Home from './components/Home';
 import Shoes from './components/Shoes';
 import Racing_boots from './components/Racing_boots';
 import Contact from './components/Contact';
 import Navbar from './components/Navbar';

 
 
 const App = () => {
   return (
     <>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/shoes" component={Shoes}/>
       <Route exact path="/racing_boots" component={Racing_boots}/>
       <Route exact path="/contact" component={Contact}/>
       <Redirect to="/"/>
     </Switch>
       
     </>
   )
 }
 
 export default App
 