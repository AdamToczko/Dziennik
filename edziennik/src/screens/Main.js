import React from 'react'
import { Columns, Column } from 'bloomer'
import { removeAlignmentProps } from 'bloomer/lib/bulma'
import { NavLink } from 'react-router-dom'

const activeStyle = {
    color: "#3298dc",
    textDecoration: 'underline'
  }

const Main =(props) => {
    return (
        <Columns>
        <Column isSize="1/4" style={{height: '100vh', background: 'lightgrey'}}>  
        <ul>
            <li>
            <NavLink to={'/profile'} activeStyle={activeStyle}>Profile</NavLink>
            </li>
            <li>
            <NavLink to={'/timetable'} activeStyle={activeStyle}>Timetable</NavLink>
            </li>
        </ul>      
        </Column>
        <Column isSize="3/4">
        {props.children}
        </Column>
        </Columns>
    )
}


export default Main;
