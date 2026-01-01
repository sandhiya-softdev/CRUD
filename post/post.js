function sendData(){
  var hello =  document.getElementById("name").value;
   fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({name:hello})

   })
   .then((response)=>{
     return response.json();
   })
   .then((data)=>{
    alert("data send success")
    console.log(data);
    
   })


}