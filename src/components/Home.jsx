import React, { useEffect, useState } from 'react'
// df2e778ac7e8e0ca500cae5a0ed91927
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const Home = () => {
    const [data,setdata]=useState(null)
    const [search,setSearch]=useState("pune")
    useEffect(()=>{
        const fetchApi=async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=df2e778ac7e8e0ca500cae5a0ed91927`
            const response = await fetch(url);
            const resjson=await response.json();
            setdata(resjson.main)

        }
        fetchApi()
    },[search])
  return (
    <div>
        <div className='inputData'>
            <input type="search"
            className='inputFeild'
            onChange={(e)=>{
                setSearch(e.target.value)

            }}/>

        </div>
        {!data ?(
            <p>no data found</p>
        ):(
            <div>
                <div className='temprature'>
            {data.temp}

        </div>
        <div className=''>

        </div>

            </div>

        )}
        
    </div>
  )
}

export default Home