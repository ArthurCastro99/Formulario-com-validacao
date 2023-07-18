const formulario = document.getElementById("form");

const msgErro = () => {
  if (!nome.value) {
    nome.nextElementSibling.classList.remove("erro-off");
    nome.classList.add("vermelho");
  } else {
    nome.nextElementSibling.classList.add("erro-off");
    nome.classList.remove("vermelho");
    nome.classList.add("verde");
  }

  if (!email.value) {
    email.nextElementSibling.classList.remove("erro-off");
    email.classList.add("vermelho");
  } else {
    email.nextElementSibling.classList.add("erro-off");
    email.classList.remove("vermelho");
    email.classList.add("verde");
  }

  if (!telefone.value) {
    telefone.nextElementSibling.classList.remove("erro-off");
    telefone.classList.add("vermelho");
  } else {
    telefone.nextElementSibling.classList.add("erro-off");
    telefone.classList.remove("vermelho");
    telefone.classList.add("verde");
  }

  if (!mensagem.value) {
    mensagem.nextElementSibling.classList.remove("erro-off");
    mensagem.classList.add("vermelho");
  } else {
    mensagem.nextElementSibling.classList.add("erro-off");
    mensagem.classList.remove("vermelho");
    mensagem.classList.add("verde");
  }
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  msgErro();
});

formulario.addEventListener("input", () => {
  msgErro();
});
