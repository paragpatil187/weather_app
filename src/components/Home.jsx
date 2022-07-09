import React, { useEffect, useState } from 'react'
// df2e778ac7e8e0ca500cae5a0ed91927
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const Home = () => {
    const [data,setdata]=useState(null)
    const [search,setSearch]=useState("pune")
    useEffect(()=>{
        
        
    },[search])
    const fetchApi=async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=df2e778ac7e8e0ca500cae5a0ed91927`
        const response = await fetch(url);
        const resjson=await response.json();
        setdata(resjson.main)

    }
  return (
    <div>
        <div className='inputData'>
            <input type="search"
            className='inputFeild'
            value={search}
            onChange={(e)=>{
                setSearch(e.target.value)

            }}/>
            <button
            onClick={()=>{fetchApi()}} 
            >search</button>

        </div>
        {!data ?(
            <p>no data found</p>
        ):(
            <div>
                <div className='temprature'>
            {data.temp} cel

        </div>
        <div className=''>

        </div>

            </div>

        )}
        
    </div>
  )
}

export default Home