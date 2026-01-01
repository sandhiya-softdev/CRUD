let close = document.getElementById("with");
const url = 'https://api.freeapi.app/api/v1/public/stocks?page=1&limit=2&inc=Symbol%252CName%252CMarketCap%252CCurrentPrice&query=tata';
fetch(url)
.then((response)=>{
  return response.json();
    
})
.then((data)=>{
   data.data.data.forEach((item)=>{
   let hello = document.getElementById("with");

   hello.innerHTML=`
   <h1>${item.Name} ${item.Symbol}</h1>
   <p>${item.Listingdata} ${item.ISIN}`
// console.log(data);
   
  })

    
})
.catch((error)=>{
    console.log(error)
});
