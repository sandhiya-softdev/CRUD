let hello=document.getElementById("btn");
hello.addEventListener("click",(eve)=>{
    eve.preventDefault();

    const hey=document.getElementById("name").value;
    const hey1=document.getElementById("email").value;
    const hey2=document.getElementById("phone").value;
 fetch("https://jsonplaceholder.typicode.com/posts", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name:hey,
        email:hey1,
      phone:hey2

    })
    
})
.then((response)=>{
    return response.json();
    
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error)
})
});