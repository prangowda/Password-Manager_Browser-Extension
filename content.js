document.addEventListener("DOMContentLoaded", function() {
    let passwordField = document.querySelector("input[type='password']");
    if (passwordField) {
        let suggestion = document.createElement("button");
        suggestion.innerText = "🔐 Suggest Strong Password";
        suggestion.style.marginLeft = "10px";
        passwordField.parentNode.insertBefore(suggestion, passwordField.nextSibling);

        suggestion.addEventListener("click", function() {
            let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
            let password = "";
            for (let i = 0; i < 12; i++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            passwordField.value = password;
        });
    }
});
