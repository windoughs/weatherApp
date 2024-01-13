import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
    const HOT_URL = "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1579847641267-5445b760b991?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAINY_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HAZE_URL ="https://media.istockphoto.com/id/885559274/photo/misty-morn-over-mumbai.jpg?s=1024x1024&w=is&k=20&c=Pyfzi9SpKxFkAQeUraYGNEkjwO4jzAV2eIwQfV64wmE="
    return(
        <div >
            {info.city.length>0 ? <div className='flex justify-center m-6 '>
        <Card sx={{ minWidth:100,maxWidth: 360, maxHeight:460, minHeight:100}}>
        <CardMedia
        sx={{ height: 190 }}
        image= {info.humidity >= 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}&nbsp;
            {info.humidity >= 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/>: <AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
            <div className='font-sans text-base font-semibold sm:text-xl'>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Minimum Temperature = {info.tempMin}&deg;C</p>
            <p>Maximum Temperature = {info.tempMax}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>The weather is {info.weather} and it feels like {info.feels_like}&deg;C .</p>
            </div>
            </Typography>
        </CardContent>
        </Card>
        </div> : <div></div>}
        </div>
    )
}
