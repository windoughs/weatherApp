import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "402d9b19e80b5ec14766dc6188b97e4a";
    let getWeather = async()=>{
       try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
       }catch(err){
            throw err;
       }
    }
    function onChangeHandle(event){
        setCity(event.target.value);
    }
    async function onSubmitHandle(event){
        try{
            event.preventDefault();
            setCity("");
            let newInfo = await getWeather();
            updateInfo(newInfo)
            setError(false);
        }catch(err){
            setError(true);
        }
    }
    return(
        <div className="flex flex-col text-center">
            <div >
            <h1 className='w-full h-24 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-serif text-center p-8 text-cyan-950  text-2xl sm:text-5xl sm:h-36'>Search for a place !!</h1>
            </div>
            <div  className='m-3'>
            <form onSubmit={onSubmitHandle}>
            <TextField id="outlined-basic" value={city} label="Search" variant="outlined" required onChange={onChangeHandle} className=' shadow-2xl shadow-black-400 '/>
            <br/><br/>
            <Button variant="contained" type="Submit">Search</Button>
            </form>
            {error ? <p className='text-red-700'>No such place exists !! </p>: <p></p>}
            </div>
        </div>
    )
}
