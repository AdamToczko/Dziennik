import React from 'react'
import "./services/firebaseSetup"
import ReactDOM from 'react-dom'
import {Container, Box, Button } from 'bloomer'
import 'bulma/css/bulma.min.css'
import Main from "./screens/Main"

const root = document.getElementById('root')

ReactDOM.render(
    // <Container>
    //     <Box>Hello World!</Box>
    //     <Button isColor='success' isOutlined>isOutlined</Button>
    // </Container>,
    <Main />,
    
    document.getElementById('root')
)