const todo = ["Walk the dog", "Water the plants", "Wash the dishes"]



const addTodobutton = document.getElementById("addTodoBtn")
const TODOLIST = document.getElementById("list")


let liCounter = 0
function createTodo (){
    console.log("+")
    liCounter++
    const newLi = document.createElement("li")
    newLi.id = "li" + liCounter;
    // newLi.innerHTML = addTodoinput;
    newLi.innerText = `${document.getElementById("todoName").value}`;

    TODOLIST.appendChild(newLi)
}


document.querySelector("#addTodoBtn").addEventListener("click", () => {
    createTodo()
})


