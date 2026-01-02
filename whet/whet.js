let hello = document.getElementById("name");
let btn=document.getElementById("btn");

const url = 'https://api.freeapi.app/api/v1/users/login';
fetch(url,{
    method:"POST",
   headers: {
        "content-type": "application/json"
    },
    body:JSON.stringify({name:hello})

})
.then((response)=>{
    return response.json();
})
.then((data)=>{
const hello2=document.getElementById("shall");
hello2.style.display="block";

})
.catch((error)=>{
    console.log(error);
    
})

