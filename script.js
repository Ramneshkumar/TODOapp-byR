const inputBox = document.getElementById("inputbox")
const kumar = document.getElementById("list-Container")

function addTask(){
    if(inputBox.value === ''){
        alert("Please Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        kumar.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="Delete";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();

}
kumar.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", kumar.innerHTML);

}
function showTask(){
    kumar.innerHTML = localStorage.getItem("data");
}
showTask();
