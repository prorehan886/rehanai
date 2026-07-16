function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email=="" || password==""){
        alert("Please enter Email and Password");
        return;
    }

    localStorage.setItem("rehanai_user", email);

    window.location.href="chat.html";

}
