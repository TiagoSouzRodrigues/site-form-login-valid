function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
     
    if(login == 'admin' && senha == 'admin'){
         alert('Seja Bem-vindo!');
         location.href = "home.html";
    } 
    else(
        alert('Usuário ou senha incorretos')
    )
}

