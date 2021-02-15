import React, { Component } from 'react'
import './App.css'
import { Link, Route, Router, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Form from './Pages/Form';





class App extends Component {

  render() {
    return (
      <div className='app' >
      <BrowserRouter>
        <div>
          <Link to='/Detail' >Detail Page</Link><br />
          <Link to='/Form' >Form Page</Link><br />
          <Link to='/' >Home Page</Link><br />
      </BrowserRouter>

        </div>
        <Switch>
          <Route path='/Detail' component={Detail} />
          <Route path='/Form' component={Form} />
          <Route path='/' component={Home} />

        </Switch>



      </div>

    )

  }




}

export default App;
