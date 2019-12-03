import React from 'react'
import { Columns, Column } from 'bloomer'
import { removeAlignmentProps } from 'bloomer/lib/bulma'

const Main =(props) => {
    return (
        <Columns>
        <Column isSize="1/4" style={{height: '100vh', background: 'lightgrey'}}>  
        links go here       
        </Column>
        <Column isSize="3/4">
        {props.children}
        </Column>
        </Columns>
    )
}


export default Main;
