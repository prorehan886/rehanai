function login(){

    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let savedEmail=localStorage.getItem("email");
    let savedPassword=localStorage.getItem("password");

    if(email===savedEmail && password===savedPassword){

        window.location.href="chat.html";

    }else{

        alert("Invalid Email or Password");

    }

}
