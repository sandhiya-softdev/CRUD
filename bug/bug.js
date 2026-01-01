let hey = document.getElementById("hello");

const url = 'https://api.freeapi.app/api/v1/public/stocks/stock/random';

fetch(url)
.then((response)=>{
    return response.json();
    // console.log(response);
    
})
.then((data)=>{
    hey.innerHTML=data.data.Name;

  

   
    // console.log(data);
    
})
.catch((error)=>{
    console.log(error)
})