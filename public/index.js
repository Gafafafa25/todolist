const todo = ["Walk the dog", "Water the plants", "Wash the dishes"]

//todo: запрос задач с сервера
let data = {
    "tasks": []
}

fetch("/tasks").then((response) => {
    return response.json();
}).then((tasks) => {
    data.tasks = tasks;
    createTask();

    // let questionNumber = 0;
    // const divQuestions = document.querySelectorAll(".q");
    //
    // divQuestions[questionNumber].style.display = "block";
    //
    // const nextBtn = document.querySelector("#nextBtn")
    //
    // nextBtn.addEventListener("click", () => {
    //     divQuestions[questionNumber].style.display = "none";
    //     questionNumber++;
    //     if (questionNumber === data.questions.length - 1) {
    //         document.querySelector("#submitBtn").style.display = "block";
    //         nextBtn.style.display = "none";
    //     }
    //     divQuestions[questionNumber].style.display = "block";
    // });

})



// const addTodobutton = document.getElementById("addTodoBtn")
const TODOLIST = document.getElementById("list")


let liCounter = 0
function createTask (){
    console.log("+")
    liCounter++
    const newLi = document.createElement("li")
    newLi.id = "li" + liCounter;
    // newLi.innerHTML = addTodoinput;
    newLi.innerText = `${document.getElementById("todoName").value}`;

    TODOLIST.appendChild(newLi)
}


document.querySelector("#addTodoBtn").addEventListener("click", () => {
    createTask()
})




