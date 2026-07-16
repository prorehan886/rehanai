document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn");

    if (btn) {
        btn.onclick = function () {
            window.location.href = "chat.html";
        };
    }
});
