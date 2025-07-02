import BotaoConclui from "./componentes/conclui.js";
import BotaoDeleta from "./componentes/deleta.js";
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
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    
    input.value = "";
}

const novaTarefa = document.querySelector('[data-button]');




//Eventos dom
novaTarefa.addEventListener('click', criarTarefa);
