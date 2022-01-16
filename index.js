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
        `
    }
}