const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn?.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn?.addEventListener('click', () => {
    container.classList.remove("active");
});

// === REGISTER ===
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    const user = {
        name: name,
        email: email,
        password: password,
        registered: new Date().toISOString()
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Registration successful! Please sign in.");
    container.classList.remove("active"); // pindah ke tab login
});

// === LOGIN ===
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(storedUser));
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password!");
    }
});
