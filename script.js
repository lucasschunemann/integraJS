function validarFormulario() {
    // Obtém os valores dos campos
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    // Verifica se B é maior que A
    if (campoB > campoA) {
        exibirMensagem(true, 'Formulário válido! B é maior que A.');
    } else {
        exibirMensagem(false, 'Formulário inválido! B deve ser maior que A.');
    }
}

function exibirMensagem(valido, mensagem) {
    // Usa alert para exibir a mensagem
    if (valido) {
        alert('Sucesso: ' + mensagem);
    } else {
        alert('Erro: ' + mensagem);
    }
}