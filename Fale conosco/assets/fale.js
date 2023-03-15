function Enviar(){

    let unidade = document.querySelector('#unidade').value;
    let estado = document.querySelector('#estado').value;
    let email = document.querySelector('#email').value;

    if (unidade && estado && email) {
        alert("Sua mensagem foi enviada, basta aguardar que lhe daremos um retorno em breve, o grau tecnico agradeçe seu apoio.")  
    } else {
        alert("Preencha todos os campos.")  
    }
    
    
};