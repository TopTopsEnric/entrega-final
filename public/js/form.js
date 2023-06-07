const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contra");
const entrar = document.getElementById("comprobar");
const registrar = document.getElementById("registrar");
const variables=
variables.append(usuario.value,contraseña.value)

entrar.addEventListener('click', e => {
    fetch('/blog/create', {
        method: 'POST',
        body: variables
      })
      .then(response => response.json())
      .then(data => {console.log("datos enviados");
      })
})


registrar.addEventListener('click', e => {
    fetch('/blog/create', {
        method: 'POST',
        body: variables
      })
      .then(response => response.json())
      .then(data => {console.log("datos enviados");
      })
})
