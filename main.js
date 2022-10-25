const form = document.getElementById('form-value');
const campoB = document.getElementById('campo-b');
const campoA = document.getElementById('campo-a');
let valorA = parseInt(campoA.value);
let valorB = parseInt(campoB.value);
let formEValid = false;

function validarValor(Valor){
    if (valorB > valorA){
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucesso = `Tudo conluido valor A: <b>${valorA}</b> é menor que o valor B: <b>${valorB}</b>`;

    formEValido = validarValor(campoB.value)
    if (!formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";

        campoB.value = '';
        campoA.value = '';
    } else {
        campoB.style.border = "1px solid red";
        document.querySelector('.error-message').style.display = "block";
    }
})
