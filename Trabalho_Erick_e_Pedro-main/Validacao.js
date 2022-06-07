function validar(){
    var nome = Formulario.nome.value;
    var idade = Formulario.Idade.value;
    var email = Formulario.email.value;
    var telefone = Formulario.telefone.value;
    var msg = Formulario.mensagem.value;

    if(nome ==""){
        alert("Preencha o campo Nome")
        return false;
    }
    if(idade ==""){
        alert("Preencha o campo Idade")
        return false;
    }
    if(email ==""){
        alert("Preencha o campo Email")
        return false;
    }
    if(telefone ==""){
        alert("Preencha o campo Telefone corretamente")
        return false;
    }
    if(msg ==""){
        alert("Preencha o campo de Mensagem")
        return false;
    }


alert("Formulário Enviado com Sucesso");
}