// sessão
function validarSessao() {
  // aguardar();

  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  if (email != null && nome != null) {
    window.alert(`Seja bem-vindo, ${nome}!`);
  } else {
    window.location = "../login.html";
  }
}

function limparSessao() {
  // aguardar();
  sessionStorage.clear();
  // finalizarAguardar();
  window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "none";

  var divErrosLogin = document.getElementById("div_erros_login");
  if (texto) {
    divErrosLogin.style.display = "flex";
    divErrosLogin.innerHTML = texto;
  }
}

// modal
function mostrarModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "flex";
}

function fecharModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "none";
}
