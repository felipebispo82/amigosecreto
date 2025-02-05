//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let participantes = [];

function adicionarParticipante() {
    let nome = document.querySelector('input').value.trim(); //.trim exclui todos espaços antes e depois do texto digitado

//  Insere o nome na lista caso o nome não seja um campo vazio
    if (nome == ''){
        alert('Insira um nome válido!')
        limpaCampo();
    } else{
        participantes.push(nome);
        atualizarlistaParticipantes();
        limpaCampo();
    }
}

//Função para exibir a lista de participantes do sorteio na pagina
function atualizarlistaParticipantes(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let x = 0; x < participantes.length; x++){
        lista.innerHTML = (`${lista.innerHTML} <li>${participantes[x]}</li>`);
    } 
}

// Gera um número aleatorio que se refere à posição na array que retornará o nome sorteado
function sortearAmigo(){
    let sorteado = document.getElementById('resultado');
    if (participantes.length > 0){
        let nomeEscolhido = Math.floor(Math.random() * participantes.length);
        sorteado.innerHTML = (`${participantes[nomeEscolhido]} foi sorteado para ser seu amigo oculto`);
    } else{
        alert('Não há participantes suficientes para brincadeira acontecer')
    }
}

//Função limpa o campo de inserção de nome, reaplica a máscara que ta no html(placeholder) e seta o foco no elemento
function limpaCampo(){
    document.querySelector('input').value = '';
    document.querySelector('input').placeholder = 'Digite um nome';
    document.querySelector('input').focus();    
}