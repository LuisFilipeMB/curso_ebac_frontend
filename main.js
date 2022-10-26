const form = document.getElementById('form-value');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
let formEValido = false;

function validarValor(){
    const valorA = parseInt(campoA.value);
    const valorB = parseInt(campoB.value);
    const valor = valorA < valorB;
    return valor;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucesso = `Tudo certo o valor A = ${campoA.value} é menor que o valor B = ${campoB.value}`

    formEValido = validarValor(campoB.value)
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";

        campoA.value = "";
        campoB.value = "";
    } else {
        campoB.style.border = "1px solid red";
        document.querySelector('.error-message').style.display = "block";
    }
})

campoB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validarValor(e.target.value);
    if (!formEValido){
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = "block";
    } else {
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = "none";
    }
})

console.log(form);
