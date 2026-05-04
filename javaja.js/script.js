let cadastro = false;

document.getElementById("toggle").onclick = () => {
    cadastro = !cadastro;

    document.getElementById("titulo").innerText = cadastro ? "Cadastro" : "Login";
    document.getElementById("botao-envio").innerText = cadastro ? "Cadastrar" : "Entrar";
    document.getElementById("toggle").innerText = cadastro
        ? "Já tem conta? Faça login!"
        : "Não tem conta? Cadastre-se!";

    document.getElementById("mensagem").innerHTML = "";
}

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";


    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='erro'><p>Senha muito curta!</p></div>";
        return;
    }

    if (cadastro) {
        localStorage.setItem(email, senha);
        mensagem.innerHTML = "<div class='sucesso'><p>Cadastro com sucesso!</p></div>";
    } else {
        let salva = localStorage.getItem(email);

        if (salva === senha) {
            mensagem.innerHTML = "<div class='sucesso'><p>Login com sucesso!</p></div>";
            setTimeout(() => {
                window.location.href = "../index.html"
            }, 1000);
        } else {
            mensagem.innerHTML = "<div class='erro'><p>Dados incorretos!</p></div>";
        }
    }

    document.getElementById("form-login").reset();
}