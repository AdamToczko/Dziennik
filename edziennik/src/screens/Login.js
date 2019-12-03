import React from 'react'
import {
    Container,
    Title,
    Subtitle,
    Columns,
    Column,
    Image,
    Field,
    Label,
    Control,
    Input,
    Button
  } from 'bloomer'

const Login = props => {
  // 1. Create login form that has two fields
  // - email
  // - password
  // 2. form should be v- and h- centered
  // 3. there should be a button "login"
  // 4. if we press login, then we should fire
  // - login function from AuthService

  // DO NOT USE FORMIK HERE!
  return (
<Container>
<Title isSize={2} hasTextAlign={'centered'}>Please log in</Title>
<Field>
    <Label>Enter email</Label>
    <Control>
        <Input type="email" placeholder='Enter email' />
    </Control>
</Field>
<Field>
    <Label>Enter password</Label>
    <Control>
        <Input type="password" placeholder='Enter email' />
    </Control>
</Field>

</Container>

  )
  
}

export default Login 