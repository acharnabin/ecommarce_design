import { Paper } from '@material-ui/core';
import React from 'react'
import '../css/card.css';
import {Redirect,Link,useHistory} from 'react-router-dom';
const Card=(props)=> {
    const history=useHistory();
    
    return (
        <>
        
        <Paper className="paper" key={props.id} onClick={()=>{history.push(props.link)}} >
            <div className="paper-inside">
                <div className="title">
                    {props.title}
                </div>
                <div className="paper-img">
                    <img src={props.image}/>
                </div>
            </div>
        </Paper>

        </>
    )
}

export default Card
