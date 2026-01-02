let things = document.getElementById("name").value;
let things1 = document.getElementById("result");
function putData() {
  fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: things }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      things1.innerText = "updatated name" + data.name;
    });
}
