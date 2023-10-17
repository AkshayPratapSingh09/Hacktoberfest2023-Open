const apikey ="cf3c0a57450337efee6fb61219da5a21";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function CheckWeather(city){
    const response=await fetch(apiUrl + city +`&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await response.json();
   

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        if(data.weather[0].main=="Clouds"){
           weatherIcon.src="Images/cloud.png";
        }  
        else if(data.weather[0].main=="Clear"){
        weatherIcon.src="Images/sun.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="Images/rain.png";
            }
        else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="Images/drizzle.png";
                }
        else if(data.weather[0].main=="Mist"){
                    weatherIcon.src="Images/mist.png";
                    }
                
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        
      
    }
    
    

}
searchBtn.addEventListener("click", ()=>{
    CheckWeather(searchBox.value);
})

