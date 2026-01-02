let btn = document.getElementById("btn");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    // refresh stop pandrathu
    let hello = document.getElementById("name").value;

  const url = 'https://api.freeapi.app/api/v1/users/login';
  fetch (url,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({name:hello})
  })
  .then((response)=>{
    if(!response.ok){
        throw new Error("login failed");
    }
    return Response.json();
  })
  .then((data)=>{
    //success aaana aprm thaan show
    const hello2= document.getElementById("shall");
    hello2.style.display="block"; 
  })
  .catch((error)=>{
    const hello3= document.getElementById("shall2");
    hello3.style.display="block"; 
    console.log(error);
    
  })
});