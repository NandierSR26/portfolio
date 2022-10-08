const business = document.querySelector('#business');
const service = document.querySelector('#service');
const budget = document.querySelector('#budget');
const purpose = document.querySelector('#purpose-website');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#e-mail');

let campos = [business, service, budget, purpose, nombre, email];
let pass = true;

const btn = document.querySelector('.form__button--send');

document.querySelector('.formulario')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_o8z4nof';

        campos.forEach((campo, i) => {
            if (campo.value === '') {
                pass = false;
            }
        })

        if (pass) {
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                    alert('Sent!');
                }, (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
        } else {
            alert('Llena todos los campos obligatorios');
        }

    });