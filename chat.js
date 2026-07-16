function sendMessage() {

    let input = document.getElementById("input");
    let messages = document.getElementById("messages");

    let text = input.value.trim();

    if(text==="") return;

    messages.innerHTML += `
    <div class="user-msg">
        ${text}
    </div>
    `;

    setTimeout(function(){

        messages.innerHTML += `
        <div class="ai-msg">
            Hello! I'm Rehan AI. I'm still under development.
        </div>
        `;

        messages.scrollTop = messages.scrollHeight;

    },800);

    input.value="";

}
