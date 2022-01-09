


window.onload = () => {

let list = document.querySelector("ul"),
homerTasks = document.querySelector("#homerTasks"),
addTask = document.querySelector ("#addTask")


addTask.addEventListener("click", (addANewTask) =>{
    
    
    let task = homerTasks.value
    if (task !== ""){
    let newTask = document.createElement("li")
    let removeBtn = document.createElement("button")
    removeBtn.innerText = "BORRA ESTA TAREA"
    text = document.createTextNode(task)    
    newTask.appendChild(text)
    list.appendChild(newTask)
    newTask.appendChild(removeBtn)    
    homerTasks.value = ""
    removeBtn.addEventListener("click", () =>{
        newTask.remove()
        alert("Tarea eliminada")        
    } )
    removeBtn.addEventListener("mouseover", () =>{
        newTask.style.color = "red"
        newTask.style.fontSize = "36px"
        newTask.style.textDecoration = "line-through"
    })
    removeBtn.addEventListener("mouseout", () =>{
        newTask.style.color = "black";
        newTask.style.fontSize = "16px"
        newTask.style.textDecoration = "none"
        
    })    

    } 
    else if (task === ""){
        homerTasks.setAttribute("placeholder", "No agregaste ninguna tarea") 
    }
    
    
   

})

homerTasks.addEventListener("click", (checkTasks) =>{
    

})


}

