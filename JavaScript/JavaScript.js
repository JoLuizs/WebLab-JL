function verificarFormulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let fone = document.getElementById("fone").value;
    let assunto = document.getElementById("assunto").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || fone === "" || assunto === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos antes de enviar!");
    } else {
      alert("Formulário enviado com sucesso!");
    }
  }