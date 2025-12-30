    const fname= document.getElementById("kom");

    fetch('https://api.freeapi.app/api/v1/public/randomproducts/30')
    .then((response)=>{
    return  response.json();
    })
    .then((data)=>{
        console.log(data);

    fname.innerHTML=data.data.title;
      fname.innerHTML=data.data.descripton;
    console.log(fname);
    })

    .catch((error)=>{
        console.log(error)

    });

