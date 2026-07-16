window.onload = function () {

    let name = localStorage.getItem("name");

    document.getElementById("welcome").innerHTML =
        "Welcome, " + (name || "Guest");

    loadMessages();

    document.getElementById("input").addEventListener("keypress", function(e){

        if(e.key === "Enter"){
            sendMessage();
        }

    });

}

function sendMessage(){

    let input = document.getElementById("input");
    let messages = document.getElementById("messages");

    let text = input.value.trim();

    if(text === "") return;

    messages.innerHTML +=
    `<div class="user-msg">${text}</div>`;

    messages.innerHTML +=
    `<div class="ai-msg">Hello! I'm Rehan AI. I'm still under development.</div>`;

    localStorage.setItem("chatHistory", messages.innerHTML);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;

}

function loadMessages(){

    let history = localStorage.getItem("chatHistory");

    if(history){
        document.getElementById("messages").innerHTML = history;
    }

}

function logout(){

    window.location.href = "login.html";

}
function addHistory(text){

    let history = document.getElementById("history");

    let item = document.createElement("div");

    item.className = "history-item";

    item.innerText = text;

    history.prepend(item);

}
addHistory(text);
