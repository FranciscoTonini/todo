const  BotaoConclui = () =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click', concluirTarefa)
    return botaoConclui
}

const concluirTarefa = (evento) => {
    const eventoBotao = evento.target; 
    const tarefaCompleta = eventoBotao.parentElement;
    tarefaCompleta.classList.toggle('done')
}
export default BotaoConclui;