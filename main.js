let contadorLinhas = 0;

document.getElementById('botaoAdicionar').addEventListener('click', function() {
    const entradaDeTexto = document.getElementById('entradaDeTexto');
    const texto = entradaDeTexto.value.trim();

    if (texto) {
        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = texto;
        document.getElementById('containerDeParagrafos').appendChild(novoParagrafo);
        contadorLinhas++;
        entradaDeTexto.value = ''; 
    } else {
        alert('Por favor, digite um parágrafo.');
    }
});

document.getElementById('botaoContar').addEventListener('click', function() {
    alert(`${contadorLinhas} linha(s) foram adicionadas.`);
});