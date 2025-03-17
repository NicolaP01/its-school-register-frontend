// No external dependencies needed for XMLHttpRequest


// User class for deserialization
class User {
    constructor(id, lastname, firstname, phone, email, active, fiscalcode) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.phone = phone;
        this.email = email;
        this.active = active;
        this.fiscalcode = fiscalcode;
    }

    // Helper method to create a User from JSON
    static fromJson(json) {
        return new User(
            json.id,
            json.lastname,
            json.firstname,
            json.phone,
            json.email,
            json.active,
            json.fiscalcode
        );
    }

    // Display user information
    toString() {
        return `User ${this.id}: ${this.firstname} ${this.lastname} (${this.email}) - Active: ${this.active ? 'Yes' : 'No'}`;
    }
}

class ApiClient {
    constructor(baseUrl = 'http://localhost:3000') {
        this.baseUrl = baseUrl;
        this.token = null;
    }

    async login(emailInput, password) {
        // Login and get token
        return new Promise((resolve, reject) => {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', `${this.baseUrl}/login`, true);
                xhr.setRequestHeader('Content-Type', 'application/json');

                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        const response = JSON.parse(xhr.responseText);
                        if (response.error === false && response.token) {
                            this.token = response.token;
                            console.log('Login successful!');
                            resolve(true);
                        } else {
                            console.error(`Login failed: ${response.errormessage}`);
                            resolve(false);
                        }
                    } else {
                        console.error(`HTTP error: ${xhr.status}`);
                        resolve(false);
                    }
                };

                xhr.onerror = () => {
                    console.error('Login error: Network error');
                    resolve(false);
                };
                
                /*console.log(JSON.stringify({
                    email: emailInput,
                    pwd: password
                }));
                */

                xhr.send(JSON.stringify({
                    email: emailInput,
                    pwd: password
                }));
            } catch (error) {
                console.error('Login error:', error.message);
                resolve(false);
            }
        });
    }
}

// Export classes for use in other files
/*module.exports = {
    User,
    ApiClient
};*/

function main() {
    const client = new ApiClient();
    let buttonlog = document.getElementById('buttonlog')
    buttonlog.addEventListener("click", (ev) => {
        let emailInput = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        //console.log(emailInput);
        //console.log(password);
        client.login(emailInput, password);
    });
}

window.onload = main;