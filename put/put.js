function putData(){
  fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers:{
        "Content-Type":"application/json"
    },
})