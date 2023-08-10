/*Criar uma página web, que receba um número e calcule:
a) função que multiplica 
b) função que calcula o fatorial de um número.*/

//Criando Função Multiplicativo
function carregar(){
    //Pegando variáveis no documento HTML
    var n1 = document.getElementById('fat');
    var n2 = document.getElementById('fat2');
  
    var n1 = Number(n1.value);
    var n2 = Number(n2.value);

    mult(n1, n2);
}

function mult(n1, n2){
    var resultado = document.getElementById('resultado');

    if (n1 == '' && n2 == ''){
        resultado.innerHTML = 'Preencha os campos.';
        resultado.style.color = 'red '

    }else{
        //Realizando a multiplicação
        var remult = n1 * n2;

        //Imprimindo em tela
        resultado.innerText = `${n1} x ${n2} = ${remult}`;
        resultado.style.color = '#323232';
    }
}

//Criando Função Fatoral
function clicar(){
    //Pegando variáveis do documento HTML
    var fato = document.getElementById('fato');
   
   
    //Transformando variável em número
    var fato = Number(fato.value);

    fatorial(fato);
}

function fatorial(fato){
    var resposta = document.getElementById('resposta');
    
    conta = 1
    //Utilizando estrutura de condição para o funcionamento do código
    if (fato == ' '){
           resposta.innerHTML = 'Preencha o campo.';
        resposta.style.color = 'red';
    }else{
        for (var i = fato; i > 1; i--){
            conta = conta * i;
            
            //Imprimindo em tela
            resposta.innerText = `O fatorial do número ${fato} é ${conta}`;
            resposta.style.color = '#323232';
        }
    }
}
