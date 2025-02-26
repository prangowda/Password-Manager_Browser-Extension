document.getElementById("generate").addEventListener("click", generatePassword);
document.getElementById("save").addEventListener("click", savePassword);

function generatePassword() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("password").value = password;
}

function savePassword() {
    let password = document.getElementById("password").value;
    if (password) {
        chrome.storage.sync.get({passwords: []}, function(data) {
            let passwords = data.passwords;
            passwords.push(password);
            chrome.storage.sync.set({passwords: passwords}, function() {
                displayPasswords();
            });
        });
    }
}

function displayPasswords() {
    chrome.storage.sync.get({passwords: []}, function(data) {
        let list = document.getElementById("passwordList");
        list.innerHTML = "";
        data.passwords.forEach((pwd, index) => {
            let li = document.createElement("li");
            li.textContent = `Password ${index + 1}: ${pwd}`;
            list.appendChild(li);
        });
    });
}

document.addEventListener("DOMContentLoaded", displayPasswords);
