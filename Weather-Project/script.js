const button = document.getElementById('serch-button');
const input = document.getElementById('city-input');
const cityName=document.getElementById('city-name');
const cityTime=document.getElementById('city-time');
const cityTemp=document.getElementById('city-temp');
async function getData(cityName) {
    const promice = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f740a94dd89a4ba8b44134530240802&q=${cityName}&aqi=yes`
    );
    return await promice.json();
}
button.addEventListener('click', async() => {
   const value=input.value;
   const result=await getData(value);
   cityName.innerText=`${result.location.name}, ${result.location.region} - ${result.location.country},`
   cityTime.innerHTML=result.location.localtime;
   cityTemp.innerText=result.current.temp_c+'°C';
}) 