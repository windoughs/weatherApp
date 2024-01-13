import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"",
        temp:"",
        tempMin:"",
        tempMax:"",
        humidity:"",
        weather:"",
        feels_like:"",
    })
    
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo)
    }
    return(
        <div className=" bg-gradient-to-r from-sky-400 to-indigo-300 h-screen w-screen">
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
           
        </div>
    )
}
