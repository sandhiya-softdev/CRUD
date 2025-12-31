let open = document.getElementById("hey");
const url = 'https://api.freeapi.app/api/v1/public/randomjokes/joke/random'
fetch(url)
.then((response)=>{
    console.log(response);
return response.json()
})
.then((data)=>{
  open.innerHTML=data.data.content;
   console.log(error);
  
    
})
.catch((error)=>{
    console.log(error);
})