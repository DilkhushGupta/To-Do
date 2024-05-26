let inputText = document.getElementById("inp");
let listContainer = document.getElementById("list-container");

function addTask(){
    if(inputText.value == "")
         alert("Please Enter Task then Add.");
    else{
        let box = document.createElement("div");
        box.innerHTML = `${inputText.value} <button>del</button>`;
        listContainer.appendChild(box);
        inputText.value = "";

        let del_btn = box.querySelector("button");
        del_btn.addEventListener("click",remove);
        function remove(){
            box.remove();
        }


    }
}

