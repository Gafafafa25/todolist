function createList(tasks) {
    //todo: clean list before
    const TODOLIST = document.getElementById("list")
    for (const task of tasks) {
        const newLi = document.createElement("li")
        newLi.innerText = task.task
        TODOLIST.appendChild(newLi)
    }
}


document.addEventListener('DOMContentLoaded', function () {
    fetch("/tasks").then((response) => {
        console.log(response)
        return response.json();
    }).then((tasks) => {
        console.log(tasks)

        createList(tasks)
    })
})


// let liCounter = 0
// function createTaskHandler (){
//     //add to db
//     //update list
// }


// document.querySelector("#addTodoBtn").addEventListener("click", () => {
//     createTaskHandler()
// })




