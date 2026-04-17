const API = "http://localhost:8080";

function login() {
    fetch(API + "/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: user.value,
            password: pass.value
        })
    })
    .then(res => res.text())
    .then(data => alert(data));
}

function upload() {
    let f = file.files[0];
    let fd = new FormData();
    fd.append("file", f);

    fetch(API + "/analyze", {
        method: "POST",
        body: fd
    })
    .then(res => res.text())
    .then(data => output.innerText = data);
}

function sendChat() {
    fetch(API + "/chat?message=" + chat.value)
    .then(res => res.text())
    .then(data => chatOut.innerText = data);
}

function loadUsers() {
    fetch(API + "/users")
    .then(res => res.json())
    .then(data => users.innerText = JSON.stringify(data, null, 2));
}
