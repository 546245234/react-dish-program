import React, { Component } from 'react';
import './App.css';
import { routes } from './routers'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       
    }
  }
  
  render() {
    return (
      <Router>
          <div className="App">
            {
                routes.map((route,key)=>{
                  if(route.exact){
                    return <Route key={key} exact path={route.path} render = {props=>(
                      <route.component {...props} routes={route.routes}/>
                    )}
                    />
                  }else{
                    return <Route key={key} path={route.path} render = {props=>(
                      <route.component {...props} routes={route.routes}/>
                    )}
                    />
                  }
                })
            }
          </div>
      </Router>
    );
  }
}
export default App;