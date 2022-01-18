document.querySelector("#push").onclick = function (){
    if(document.querySelector("#newtask input").value.length == 0){
        alert("Nothing was added! You gotta do something!")
    }
    else {
        document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
        `;

        const currentTask = document.querySelectorAll(".delete");

        for(let i = 0; i < currentTask.length; i++) {
            currentTask[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        
        const tasks = document.querySelectorAll(".task");
        for(let i = 0; i < tasks.length; i++){
            tasks[i].onclick = function() {
                this.classList.toggle('completed')
            }
        }
    }
}