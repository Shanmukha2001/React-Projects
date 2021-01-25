import React from 'react'
import Brick from './Brick'

export default function GenerateBricks(props) {
    return(
        <div className="arena">
            {props.values.map((value) => {
                return <Brick number = {value} />
            })}
        </div>  
    )
}
