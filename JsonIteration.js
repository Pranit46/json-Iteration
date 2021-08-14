const getCountries = () =>{
    const xhr = new XMLHttpRequest()
    // data-endpoint (url which contains the json data)
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all')
    xhr.responseType = 'json'

    xhr.onload = ()=>{
       const data = xhr.response
       console.log(data);
       console.log(data[0].name);

       for(let i in data){
        //console.log(name);
        console.log("Country is "+data[i].name);
        console.log("The populstion of " +data[i].name +" now "+ data[i].population);
      }

      for(let i in data){
        //console.log(name);
        if( data[i].population > 10000000 )
        console.log(data[i].name)
      }

 
       //console.log(JSON.parse(data))
    }
    xhr.send()
}

getCountries()