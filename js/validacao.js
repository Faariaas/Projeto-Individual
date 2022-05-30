const form = document.querySelector('#form');
const username = document.getElementById('nome_input');
const email = document.getElementById('email_input');
const password = document.getElementById('senha_input');
const confirmacaoSenha = document.getElementById('confirmacao_senha_input');


form.addEventListener('submit', e => {
    e.preventDefault();
    const status = checkInputs();

    if (status) {
        e.target.submit();
    }
});

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     checkInputs()
// })


function checkInputs() {
    const nomeValue = username.value.trim()
    const emailValue = email.value.trim()
    const senhaValue = password.value.trim()
    const confirmacaoValue = confirmacaoSenha.value.trim()

    if (nomeValue === "") {

        errorValidation(username, 'Preencha esse campo')
        // alert("Preencha todos os campos para prosseguir!");

        // finalizarAguardar();
        // return false;
    }
    else {
        successValidation(username)
        // setInterval(sumirMensagem, 5000)
    }

    if (emailValue === '') {
        errorValidation(email, "Preencha esse campo");
    } else if (!isEmail(emailValue)) {
        errorValidation(email, "Esse email não é valido");
    } else {
        successValidation(email);
    }

    if (senhaValue === '') {
        errorValidation(password, "Digite uma senha");
    } else {
        successValidation(password);
    }

    if (confirmacaoValue === '') {
        errorValidation(confirmacaoSenha, "Preencha esse campo");
    } else if (senhaValue !== confirmacaoValue) {
        errorValidation(confirmacaoSenha, "As senha devem se igual");
    } else {
        successValidation(confirmacaoSenha);
    }

    return true;
}


function errorValidation(input, message) {
    const formGroup = input.parentElement;

    const small = formGroup.querySelector('small')

    small.innerText = message

    formGroup.className = 'textfield error'

}
function successValidation(input) {
    const formGroup = input.parentElement; // .form-group
    formGroup.className = 'textfield success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} 
