### **🛡️Password Manager - Browser Extension**  

A **secure and lightweight** browser extension that helps users **store, manage, and generate strong passwords**. The extension automatically suggests strong passwords during **website registration** and securely stores login credentials for future use.  

---

## **📌 Features**  

✔ **Generate Strong Passwords** using random combinations of **letters, numbers, and symbols**  
✔ **Securely Store Passwords** in the browser’s local storage  
✔ **Autofill Passwords** when logging into websites  
✔ **User-Friendly Interface** for managing stored credentials  
✔ **Encryption Support** for protecting stored passwords  

---

## **🛠️ Technologies Used**  

| **Technology**  | **Purpose**  |  
|-----------------|-------------|  
| **JavaScript**  | Core logic for password generation and management |  
| **HTML/CSS**  | User interface design |  
| **Chrome API**  | Integrating the extension with browsers |  
| **Crypto API**  | Encrypting stored passwords |  

---

## **📂 Project Structure**  

```
/PasswordManagerExtension
│── manifest.json              # Extension metadata
│── popup.html                 # UI for password manager
│── popup.js                   # JavaScript logic
│── style.css                  # Styling for UI
│── background.js              # Runs in the background
│── content.js                 # Injected into web pages
│── README.md                  # Documentation
```
## **🛠️ Installation Guide**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/prangowda/PasswordManagerExtension.git
cd PasswordManagerExtension
```

### **2️⃣ Load the Extension in Chrome**  
1. Open **Chrome** and go to `chrome://extensions/`  
2. Enable **Developer Mode** (top right corner)  
3. Click **Load Unpacked** and select the project folder  
4. The extension will appear in your **browser toolbar**  

---

## **📊 How It Works?**  

1️⃣ Click the extension icon → Opens **Password Manager**  
2️⃣ Click **Generate Password** → Creates a secure password  
3️⃣ Click **Save Password** → Stores it in Chrome storage  
4️⃣ While registering on a website → Click **🔐 Suggest Strong Password**  
5️⃣ Autofills a strong password in the registration form  

---

## **🚀 Future Enhancements**  

✅ **AES Encryption** for password security  
✅ **Sync Passwords** across devices  
✅ **Login Autofill** for stored credentials  
✅ **Export Passwords** to a secure file  

---

## **🤝 Contributing**  
We welcome contributions! Follow these steps:  
1. **Fork** the repository  
2. **Create** a new branch (`feature-xyz`)  
3. **Commit** your changes  
4. **Push** to your branch and submit a **Pull Request**  
