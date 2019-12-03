import React from 'react'
import { Columns, Column } from 'bloomer'

const Main =() => {
    return (
        <Columns>
        <Column isSize="1/4" style={{height: '100vh', background: 'lightgrey'}}>  
        1/4         
        </Column>
        <Column isSize="3/4">
        3/4
        </Column>
        </Columns>
    )
}


export default Main;
