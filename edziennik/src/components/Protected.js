import React, {useState, useEffect} from 'react'
import firebase from '../services/firebaseSetup'
import { Login } from "../screens"

const Protected = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  // check if logged or not logged in
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

      // setIsLoggedIn(user ? true : false)
    })
  }, [])

  if (isLoggedIn == null) {
    return <h1>Poczekaj, sprawdzam!</h1>
  }

  // if not logged in show login screen
  if (isLoggedIn === false) {
    return <Login />
  }

  if (isLoggedIn === true) {
    return props.children
  }
}

export default Protected