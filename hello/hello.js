let charger = document.getElementById("hello");
fetch('https://api.freeapi.app/api/v1/public/randomproducts/product/random')
.then((response)=>{
return response.json();

})
.then((data)=>{
    console.log(data.data); // 👈 actual product
    charger.textContent = data.data.title;
    
})
.catch((error)=>{
    console.log(error)
});