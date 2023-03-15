function Enviar(){

    let email = document.querySelector('#exampleInputEmail1').value;
    let senha = document.querySelector('#exampleInputPassword1').value;

    if (email && senha) {
        alert("Usuário Matriculado com sucesso.")  
    } else {
        alert("Preencha todos os campos.")  
    }
    
    
};