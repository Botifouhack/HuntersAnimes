function afficherMessage() {
    const message = document.getElementById('message');
    message.textContent = "Bienvenue dans notre univers anime, Hunter !";
}

function creerCompte(event) {
    event.preventDefault();
    const mdp = document.getElementById("motdepasse").value;
    const confirm = document.getElementById("confirm").value;
    const result = document.getElementById("resultat");

    if (mdp === confirm) {
        result.textContent = "Compte créé avec succès !";
        result.style.color = "green";
    } else {
        result.textContent = "Les mots de passe ne correspondent pas.";
        result.style.color = "red";
    }
}

function envoyerMessage() {
    const input = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-box");

    if (input.value.trim() !== "") {
        const p = document.createElement("p");
        p.textContent = input.value;
        chatBox.appendChild(p);
        input.value = "";
    }
}

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById("theme-icon");
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}