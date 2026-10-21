const form = document.getElementById("loginForm");

if (form) {
  const identitas = document.getElementById("identitas");
  const password = document.getElementById("password");
  const pesan = document.getElementById("pesan");

  // ===== ISI USERNAME DAN PASSWORD DI SINI =====
  const USERNAME = "syaira ramadhani";
  const PASSWORD = "12345678";
  // ==============================================

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    identitas.classList.remove("is-invalid");
    password.classList.remove("is-invalid");

    if (
      identitas.value === USERNAME &&
      password.value === PASSWORD
    ) {
      pesan.className = "alert alert-success";
      pesan.textContent = "Login berhasil!";

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      pesan.className = "alert alert-danger";
      pesan.textContent = "Username atau password salah.";

      identitas.classList.add("is-invalid");
      password.classList.add("is-invalid");
    }
  });
}