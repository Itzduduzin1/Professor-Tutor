// Função para limpar o campo de RA
function clearInput(id) {
    document.getElementById(id).value = "";
}

// Função para alternar a visibilidade da senha
function togglePassword() {
    let passwordField = document.getElementById("password");
    let toggleBtn = document.querySelector(".toggle-password i");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleBtn.classList.remove("fa-eye");
        toggleBtn.classList.add("fa-eye-slash"); // Ícone de olho fechado
    } else {
        passwordField.type = "password";
        toggleBtn.classList.remove("fa-eye-slash");
        toggleBtn.classList.add("fa-eye"); // Ícone de olho aberto
    }
}