
    const form = document.getElementById('#form');
    const username = document.getElementById('nome_input');
    const email = document.getElementById('email_input');
    const password = document.getElementById('senha_input');
    const confirmacaoSenha = document.getElementById('confirmacao_senha_input');
    
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        checkInputs()
    })
    
        
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
            // setInterval(sumirMensagem, 5000)
        }

        if (emailValue === '') {
            errorValidation(email, "Email cannot be blank");
        } else if(!isEmail(emailValue)) {
            errorValidation(email, "Email is not valid");
        } else {
            successValidation(email);
        }
        
        if (senhaValue === '') {
            errorValidation(password, "Password cannot be blank");
        } else {
            successValidation(password);
        }
        
        if (confirmacaoValue === '') {
            errorValidation(password2, "Password check cannot be blank");
        } else if(senhaValue !== confirmacaoSenha) {
            errorValidation(confirmacaoSenha, "Passwords does not match");
        } else {
            successValidation(confirmacaoSenha);
        }
        
        return true;
    }
    
    
    function errorValidation(input, message) {
        const textfieldControl = input.parentElement;
        
        const small = textfield.querySelector('small')
        
        small.innertext = message
        
        textfieldControl.className = "textfield error"
        
    }
    function successValidation(input) {
        const formGroup = input.parentElement; // .form-group
        formGroup.className = 'form-group success';
    }
