import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../../config/history'
import Main from '../Main/Main'
import Feed from '../Feed/Feed'
import NotFound from '../NotFound/NotFound'

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/Feed' component={Feed} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App