document.getElementById("login-btn").addEventListener("click", async (event) => {
    event.preventDefault(); // ✅ form reload rokega

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("username", data.username); // ✅ save username
            window.location.href = "/recipie_homePage/index.html"; // ✅ redirect
        } else {
            alert(data.error || "Login failed!");
        }
    } catch (err) {
        console.error(err);
        alert("Server error!");
    }
});
