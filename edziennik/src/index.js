import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import 'bulma/css/bulma.min.css'
import './index.css'
import "./services/firebaseSetup"

import { Main, Profile, Timetable } from "./screens"
import Protected from "./components/Protected"

const root = document.getElementById('root')
ReactDOM.render(
  <Protected>
    <Router>
      <Main>
        <Switch>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/timetable" component={Timetable}/>
          <Redirect to="/profile"/>
        </Switch>
      </Main>
    </Router>
  </Protected>
  , root)