alert("Entre com o seguinte login: \n Usuário: joaodasilva@gmail.com \n Senha: semcriatividade")

function validaForms(){
    var form = document.getElementById("idForm");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    console.log(email.value + " funcionou")
    if (email.value == "joaodasilva@gmail.com" && senha.value == "semcriatividade"){
        return true
    } else{
        alert("Email ou senha incorreto(s)");
        return false
    }
}



