var email = ('rafaassad@hotmail.com');
console.log (email);
console.log ('O seu email é: ' + email);

document.getElementById('btn-submit').addEventListener('click', e => {
    console.log ('O botaão foi clicado')
});
document.getElementById('form-login').addEventListener('mouseenter', e =>{
    console.log ('o mouse esta no formulario')
})

document.querySelector('#form-login').addEventListener('submit', e =>{
    e.preventDefault();

    let email = document.querySelector('#email').value; 
    let password = document.querySelector('#password').value;   

    let json = {
        email,
        password
    };
    console.log (json);

    let stringJSON = JSON.stringify(json);
    console.log (stringJSON);

    let jsonParse = JSON.parse (stringJSON);
    console.log(jsonParse);

    if (!json.email) {console.error ('o campo deve ser preenchido.');
}
}) 