async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return alert("Login failed: " + error.message);
    alert("Login successful!");
    window.location.href = 'index.html';
}
