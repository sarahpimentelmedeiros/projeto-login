function logar(){
    var login = document.getElementById('ilogin').value;
    var senha = document.getElementById('isenha').value;

    if(login == 'admin' && senha == '12345678'){
        location.href = 'home.html';
    }else{
        alert('Usuário ou senha incorreto. Tente novamente!');
    }
}
function cadastrar(){
    location.href = 'form-cadastro.html';
}
function voltar(){
    location.href = 'index.html';
}