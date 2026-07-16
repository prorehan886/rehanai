window.onload = function () {

    let name = localStorage.getItem("name");

    if (name) {
        document.getElementById("welcome").innerHTML = "Welcome, " + name;
    } else {
        document.getElementById("welcome").innerHTML = "Welcome, Guest";
    }

}

function sendMessage() {

    let input = document.getElementById("input");
    let messages = document.getElementById("messages");

    let text = input.value.trim();

    if (text === "") return;

    messages.innerHTML += `
        <div class="user-msg">${text}</div>
    `;
document.getElementById("input").addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});
    setTimeout(function () {

        messages.innerHTML += `
            <div class="ai-msg">
                Hello! I'm Rehan AI. I'm still under development.
            </div>
        `;

        messages.scrollTop = messages.scrollHeight;

    }, 500);

    input.value = "";

}

function logout() {

    window.location.href = "login.html";

}
