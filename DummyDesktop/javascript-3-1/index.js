window.addEventListener('load',()=>{
    let long,lati;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude; 
            lati = position.coords.latitude;
            console.log(`${long} ${lati}`)
            const api = `http://api.weatherstack.com/current
                ? access_key = fba490125992f7675a0ef832f5344840
                & query = New York`
    
        })
    }else{
        
    }
});