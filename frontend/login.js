function login() {
    let elem = document.getElementById('username');
    console.log(elem.value);
    elem = document.getElementById('password');
    console.log(elem.value);
}

function svuotausername() {
    let elem = document.getElementById('username');
    elem.value = "";
}

function svuotapassword() {
    let elem = document.getElementById('username');
    elem.value = "";
}

function togglepassword() {
    let elem = "";
    if (password.type == "password") {
        elem = document.getElementById('password').setAttribute("type", "text");
    }
    else {
        elem = document.getElementById('password').setAttribute("type", "password");
    }
    //.getAttribute("type")
    //console.log(elem)
}