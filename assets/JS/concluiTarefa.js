const BotaoConclui = () => {
    const botaoConlcui = document.createElement('button')

    botaoConlcui.classList.add('check-button')
    botaoConlcui.innerText = 'concluir'
    botaoConlcui.addEventListener('click', concluirTarefa)

    return botaoConlcui
}

const concluirTarefa = (evento) => {
    const botaoConlcui = evento.target

    const tarefaCompleta = botaoConlcui.parentElement

    tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui