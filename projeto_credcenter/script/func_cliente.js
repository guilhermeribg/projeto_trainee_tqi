function set_visible(){

    if (document.getElementById("solicitacao")){
        if(document.getElementById("solicitacao").style.display == 'none'){
            document.getElementById("solicitacao").style.display = 'block';
            document.getElementById("acompanhamento").style.display = 'none';
        } else{
            document.getElementById("solicitacao").style.display = 'none';
            document.getElementById("acompanhamento").style.display = 'block';
        }
    }
}