document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // get unordered list
  const myToDos = document.getElementById("tasks");
 
  //get submit button
  let submitBtn = null;
  const inputs = document.getElementsByTagName("input")
  for(let input of inputs) {
    if(input.type === "submit") {
      submitBtn = input;
    }
  }

  // submit button event listener
  // create <li> element eith remove button and append to <ul>
  submitBtn.addEventListener("click",function(e){
    e.preventDefault();

    const userIn = document.getElementById("new-task-description").value;
    const task = document.createElement("li");
    const delBtn = document.createElement("button");
    
    task.textContent = userIn;
    delBtn.innerText = "X";
    delBtn.addEventListener("click",() => delBtn.parentNode.remove());

    task.append(delBtn); // append delete button to task
    myToDos.appendChild(task); // append task to myToDos
  })
});
