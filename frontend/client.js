const { default: axios } = require("axios");

let buttonlog=document.getElementById('buttonlog');
buttonlog.addEventListener("click", login);

const baseUrl = "localhost:3000";
const token = token;

async function login(email, password) {
    let emailInput=document.getElementById("email");
    let passwordInput=document.getElementById("password");
    try {
        const response = await post(`${baseUrl}/login`, {
            email: emailInput.textContent,
            pwd: passwordInput.textContent
        })

        if (response.data.error === flase && response.data.token) {
            token = response.data.token;
            console.log('Login successful!');
            return true;
        } else {
            console.error(`login failed: ${response.data.errormessage}`);
            return false;
        }
    } catch (error) {
        console.error('Login error', error.message);
        return false
    }
}
