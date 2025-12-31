var good=document.getElementById("thin");
const url = 'https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech';
fetch(url)
.then((response)=>{
   return response.json();
    
})
.then((data)=>{
      data.data.data.forEach((book)  => {
    let p = document.createElement("p");
    p.textContent = book.volumeInfo.title;
    good.appendChild(p);
     })


 
})
.catch((error)=>{
     console.log(error);
})