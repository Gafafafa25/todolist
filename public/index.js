function createList(tasks) {
    //todo: clean list before
    const TODOLIST = document.getElementById("list")
    for (const task of tasks) {
        const newDiv = document.createElement("div")
        newDiv.className = "blockBtn"

        const newSpan = document.createElement("span")
        newSpan.innerText = task.task
        newDiv.appendChild(newSpan)

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "removeBtn bg-red-700 hover:bg-red-900 text-white py-0.2 px-2 rounded transition opacityTest";
        removeBtn.id = task.task_id
        removeBtn.innerHTML = "x";
        newDiv.appendChild(removeBtn)

        const isDoneBtn = document.createElement("button");
        isDoneBtn.type = "button";
        isDoneBtn.className = "isDoneBtn bg-green-700 hover:bg-green-900 text-white py-0.2 px-2 rounded transition opacityTest";
        isDoneBtn.id = task.task_id
        isDoneBtn.innerHTML = "v";
        newDiv.appendChild(isDoneBtn)


        TODOLIST.appendChild(newDiv)
    }
}

let data = {
    "tasks": []
}


document.addEventListener('DOMContentLoaded', async function () {
    let response = await fetch("/tasks")
    data.tasks = await response.json()
    console.log(data.tasks)
    createList(data.tasks)


    const arrayRemoveBtn = document.querySelectorAll(".removeBtn")
    console.log(arrayRemoveBtn)
    for (const item of arrayRemoveBtn) {
        console.log("+=++++")
        item.addEventListener("click", async () => {
            // проверка логина в бд
            console.log(item.id)
            let response = await fetch("/removeQuestion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "taskId": item.id
                })
            })
            console.log(response)
        });
    }

    const arrayIsDoneBtn = document.querySelectorAll(".isDoneBtn")
    console.log(arrayIsDoneBtn)
    for (const item of arrayIsDoneBtn) {
        console.log("+=++++")
        item.addEventListener("click", async () => {
            // проверка логина в бд
            console.log(item.id)
            let response = await fetch("/markQuestion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "taskId": item.id
                })
            })
            console.log(response)
        });
    }
})


// let liCounter = 0
// function createTaskHandler (){
//     //add to db
//     //update list
// }


// document.querySelector("#addTodoBtn").addEventListener("click", () => {
//     createTaskHandler()
// })




