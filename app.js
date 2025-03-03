//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }
    
    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    
    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    
    listaAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio!");
        return;
    }
    
    let sorteio = [...listaAmigos];
    let resultado = {};
    
    for (let i = 0; i < listaAmigos.length; i++) {
        let possiveisSorteados = sorteio.filter(nome => nome !== listaAmigos[i]);
        
        if (possiveisSorteados.length === 0) {
            alert("Não foi possível realizar o sorteio sem substituição. Tente novamente.");
            return;
        }
        
        let amigoSecreto = possiveisSorteados[Math.floor(Math.random() * possiveisSorteados.length)];
        resultado[listaAmigos[i]] = amigoSecreto;
        sorteio = sorteio.filter(nome => nome !== amigoSecreto);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";
    
    for (const [amigo, sorteado] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${sorteado}`;
        resultadoElement.appendChild(li);
    }
}
