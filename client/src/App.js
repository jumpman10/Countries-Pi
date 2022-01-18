import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Details from './home/Details';
import Activities from './home/Activities';
import Landing from './componentes/LandingPage';
import ListActivities from './home/ListActivities';

function App(){
  
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/" component={Landing}/> 
          <Route exact path="/home" component={Home} />
          <Route exact path="/details/:id"
           render={({ match }) => <Details id={match.params.id}/>}
           />
          <Route exact path="/activities" component={Activities}/>
          <Route exact path="/list" component={ListActivities}/>
        </Switch>
      </Router>
    </>
  )


}


export default App;
