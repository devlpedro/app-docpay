// required
const fields = document.querySelectorAll('[required]');

function ValidateField(field) {
    // Lógica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for (let error in field.validity) {
            // Se não for customError
            // Então verifica se tem error
            if (field.validity[error] && !field.validity.valid) {
                foundError = error;
            }
        }
        return foundError;
    }

    // console.log(field.validity);

    function customMessage(typeError) {
        const messages = {
            email: {
                valueMissing: 'E-mail obrigatório',
                typeMismatch: 'Por favor, preencha um email válido',
            },
            password: {
                valueMissing: 'Senha obrigatório',
            },
        }
        return messages[field.type][typeError];
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector('.error');
        if (message) {
            spanError.classList.add('active');
            spanError.innerText = message;
        } else {
            spanError.classList.remove('active');
            spanError.innerText = '';
        }
    }

    return function () {
        const error = verifyErrors();

        if (error) {
            const message = customMessage(error);
            field.style.border = '2px solid #dd3131';
            setCustomMessage(message);
        } else {
            field.style.border = '2px solid #65a30d';
            setCustomMessage();
        }
    }
}

function customValidation(event) {
    const field = event.target;
    const validation = ValidateField(field);

    validation()
}

for (const field of fields) {
    field.addEventListener('invalid', event => {
        // Eliminar o bubble
        event.preventDefault();

        customValidation(event);
    });
    field.addEventListener('blur', customValidation);
};

document.querySelector('#form')
    .addEventListener('submit', event => {
        console.log('Obrigado por fazer o teste desta aplicação.\n' + 'Desenvolvido por Pedro Henrique.\n' + 'Instagram: @lpedrogg ❤');

        event.preventDefault();
    });