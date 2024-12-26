function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "12345") {
        alert("Login berhasil!");
    } else {
        alert("Login gagal. Username atau password salah.");
    }
}