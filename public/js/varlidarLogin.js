function validarformulario(){

    var user;
    var pass;
    var expresion;

    user=document.getElementById('loginUsuario').value;
    pass=document.getElementById('loginPass').value;

    expresion= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

      if ( user ==="" || pass==="" ) { 
         document.getElementById("errorLogin").innerHTML = "Todos los campos son obligatorios";
         return false
      }
      else if (!expresion.test(user.value)){ 
        document.getElementById("errorLogin").innerHTML = "Ingresa un correo valido";
        return false
         }
}
