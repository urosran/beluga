import React from 'react'
import {Paper} from '@material-ui/core'
import Card from './Card'

export default ({styles, issues:{data}}) =>
    
    
    <Paper style={styles.Paper}>
        {/* {data.map(
            issue=>
            <Card issueDetails={issue}/>
        )} */}
        {/* {typeof(props)} */}
        {/* {data} */}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       
    </Paper>