document.getElementById("taskForm").addEventListener("submit",(off)=>{
    off.preventDefault();
// we want to the input id name
const name= document.getElementById("name").value;
const email= document.getElementById("email").value;
const phone= document.getElementById("phone").value;

const newTask = {
    name:name,
    email:email,
    phone:phone,
};
fetch("https://674dd350635bad45618ce6d0.mockapi.io/crud", {
    method: "POST",
    headers:{
         "Content-Type":"application/json"
    },
    body: JSON.stringify(newTask),
    

})
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
    const res=document.getElementById("responseMessage");
    res.style.display="block";
    res.textContent="task created";


})
.catch((error)=>{
    const errorMess = document.getElementById("errorMessage");
    errorMess.style.display="block";
    errorMess.textContent="error"

});
});