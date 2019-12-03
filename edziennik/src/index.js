import React from 'react'
import "./services/firebaseSetup"
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bulma/css/bulma.min.css'
import { Main, Profile, Timetable } from "./screens"
import './index.css'
import Protected from "./components/Protected"


const root = document.getElementById('root')

ReactDOM.render(
    <Protected>
    <Router>
      <Main>
        <Switch>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/timetable" component={Timetable}/>
        </Switch>
      </Main>
    </Router>
  </Protected>
    , root
)