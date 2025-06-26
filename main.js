const criarTarefa = (evento) =>{
    evento.preventDefault();
    const lista = document.querySelector('[data-ul]');
    const input = document.querySelector('[data-imput]');
    const valor = input.value;
    console.log(valor);
    const tarefa = document.createElement('li');
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`;
    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa);
    
    input.value = "";
}

const novaTarefa = document.querySelector('[data-button]');




//Eventos dom
novaTarefa.addEventListener('click', criarTarefa);
