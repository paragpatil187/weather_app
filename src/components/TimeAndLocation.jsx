import React from 'react'
import { formatToLocalTime } from '../components/weatherApi'

const TimeAndLocation = ({weather : { dt, timezone, name, country}}) => {
  return (
    <div>
        <div className=''>
            <p className=''>
                {formatToLocalTime(dt, timezone)}
            </p>
        </div>

        <div className=''>
            <p className=''>{`${name}, ${country}`}</p>
        </div>
    </div>
  )
}

export default TimeAndLocation