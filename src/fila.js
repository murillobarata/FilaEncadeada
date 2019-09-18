fila = {
    no_inicial: null,
    no_final: null,
    tamanho_atual: 0,
    tamanho_maximo: 5
}

function criarNo() {
    no = {
        valor: Math.floor(Math.random() * 20),
        proximo: null,
    }

    return no;
}

function inserir() {
    novo_no = criarNo();

    //verificar se a fila está vazia
    if (fila.no_inicial == null && fila.tamanho_atual == 0) {
        fila.no_inicial = novo_no;
        fila.no_final = novo_no;
        fila.tamanho_atual++;
        addFilaHTML();
    } else if (fila.tamanho_atual == fila.tamanho_maximo) {
        //verificar se a fila está cheia
        alert("pilha cheia");
    } else {
        //inserir
        fila.no_final.proximo = novo_no;
        fila.no_final = novo_no;
        fila.tamanho_atual++;
        addFilaHTML();
    }
    
    console.log(fila);
}

function remover() {
    // verificar se fila está vazia
    if (fila.tamanho_atual == 0 
        && fila.no_inicial == null 
        && fila.no_final == null) {
        alert("fila vazia");
    } else {
        novo_no_inicial = fila.no_inicial.proximo;
        fila.no_inicial = novo_no_inicial;
        fila.tamanho_atual--;
        if (fila.tamanho_atual == 0) {
            fila.no_final = null;
        }
        rmFilaHTML();
    }

    console.log(fila);
}

function addFilaHTML() {
    div = "<div class=\"fila-no\" id=\""+fila.tamanho_atual+"\">"+fila.no_final.valor+"</div>";
    document.getElementById("fila").innerHTML += div;    
}

function rmFilaHTML() {
    document.getElementById("fila").children[0].remove();
}
