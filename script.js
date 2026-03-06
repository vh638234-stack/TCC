// ===== BARRA DE PESQUISA =====

const campoPesquisa = document.getElementById("pesquisa");

if (campoPesquisa) {

    campoPesquisa.addEventListener("input", function() {

        const textoDigitado = this.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const titulo = card.querySelector("h3").innerText.toLowerCase();

            if (titulo.includes(textoDigitado)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}


// ===== LOGIN =====

const btnLogin = document.getElementById("btnLogin");

if (btnLogin) {

    btnLogin.addEventListener("click", function(event) {

        event.preventDefault(); // impede sair da página

        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const erro = document.getElementById("erroLogin");

        // Se estiver vazio OU errado → mostra erro
        if (usuario !== "admin" || senha !== "1234") {
            erro.innerText = "Usuário ou senha inválidos";
            return;
        }

        // Se estiver correto → entra
        window.location.href = "Estoque.html";

    });

}

// ===== BOTÃO RELATÓRIO (TELA ESTOQUE) =====

const botaoRelatorio = document.getElementById("botao");

if (botaoRelatorio) {

    botaoRelatorio.addEventListener("click", function() {
        alert("Remédios em estoque baixo");
    });

}

// ===== CADASTRO =====

const btnCadastro = document.getElementById("btnCadastro");

if (btnCadastro) {

    btnCadastro.addEventListener("click", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const usuario = document.getElementById("novoUsuario").value.trim();
        const senha = document.getElementById("novaSenha").value.trim();
        const erro = document.getElementById("erroCadastro");

        if (nome === "" || usuario === "" || senha === "") {
            erro.innerText = "Preencha todos os campos.";
            return;
        }

        // Se estiver tudo preenchido
        window.location.href = "Estoque.html";

    });

}

// ===== MOSTRAR NOME DO ARQUIVO (RECEITAS) =====

const inputArquivo = document.getElementById("arquivoReceita");
const nomeArquivo = document.getElementById("nomeArquivo");

if (inputArquivo) {
    inputArquivo.addEventListener("change", function() {
        if (this.files.length > 0) {
            nomeArquivo.innerText = "Arquivo selecionado: " + this.files[0].name;
        }
    });
}

// ===== MELHORAR MENSAGEM DE UPLOAD =====

if (btnUpload) {

    btnUpload.addEventListener("click", function() {

        const arquivo = document.getElementById("arquivoReceita").value;
        const msg = document.getElementById("msgUpload");

        if (arquivo === "") {
            msg.innerText = "Selecione uma receita para enviar.";
            msg.className = "erro";
        } else {
            msg.innerText = "Receita enviada com sucesso!";
            msg.className = "sucesso";
        }

    });

}