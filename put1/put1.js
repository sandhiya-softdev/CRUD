let tasks=[];
const cardContainer = document.getElementById("cardContainer");
const updateForm = document.getElementById("updateForm");
const editTaskForm = document.getElementById("editTaskForm");
const editName= document.getElementById("editName");
const editEmail= document.getElementById("editEmail");
const editPhone = document.getElementById("editPhone");
let currentTaskId= null;

function fetchTasks(){
  fetch("https://64e2b7c4ab0037358818b3a0.mockapi.io/users")
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        tasks=data;
        renderCards();
        console.log(data);
        
      })
      .catch((error)=>{
        console.log("error fetching tasks:",error)
      });

}
// render tasks in cards

function renderCards(){
    cardContainer.innerHTML = tasks
    .map(
        (task)=>`
        <div class="card">
       
        <h3>${task.name}</h3>
        <p><strong>Email:</strong>${task.email}</p>
        <p><strong>Phone:</strong>${task.phone}</p>
        <p><strong>Email:</strong>${task.email}</p>
        <button onclick="editTask('${task.id}')">updata</button>
        </div>
       `
    )
    .join("");
}


function editTask(id) {
      const task = tasks.find((t) => t.id === id);
      if (!task) return;
      currentTaskId = id;
      updateForm.style.display = "block";
      editName.value = task.name;
      editEmail.value = task.email;
      editPhone.value = task.phone;
    }
     editTaskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!currentTaskId) return;

      const updatedTask = {
        name: editName.value,
        email: editEmail.value,
        phone: editPhone.value,
      };
fetch(`https://64e2b7c4ab0037358818b3a0.mockapi.io/users/${currentTaskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      })
        .then((res) => res.json())
        .then((data) => {
          tasks = tasks.map((task) => (task.id === data.id ? data : task));
          renderCards();
          updateForm.style.display = "none";
          alert("Task updated successfully!");
        })
        .catch((error) => {
          console.log("Error updating task:", error);
        });
    });





























fetchTasks();




