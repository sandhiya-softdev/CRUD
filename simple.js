const fname=document.getElementById("hii");
fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random')
.then((reponse)=>{
    return reponse.json();
   
})
.then((data)=>{
    fname.innerHTML=data.data.content;
    console.log(data);
    
})
.catch((error)=>{
    console.log(error)

});
