    const fname= document.getElementById("kom");

    fetch('https://api.freeapi.app/api/v1/public/randomproducts/30')
    .then((response)=>{
    return  response.json();
    })
    .then((data)=>{
        console.log(data);
          fname.innerHTML = `
      <h2>${data.data[0].title}</h2>
      <p>${data.data[0].description}</p>
    `;

    
    console.log(fname);
    })

    .catch((error)=>{
        console.log(error)

    });

