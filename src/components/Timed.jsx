import React from 'react'
import { iconUrlFromCode } from './weatherApi'

const Timed = ({mydata}) => {
console.log(mydata.tempday)
  return (
    <div>
        <div>
            {mydata.tempday.toFixed()}
            
        </div>
        <img
          src={iconUrlFromCode(mydata.icon)}
          style={{height:"8rem",marginLeft:"0.5rem",marginTop:"-2rem"}}
        />
        <div>
            {mydata.desc}
        </div>
    </div>
  )
}

export default Timed