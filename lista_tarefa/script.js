function adicionarTarefa(){
    const novaTarefa = document.getElementsByClassName('new-task')[0].value
    if (novaTarefa === ''){return}
    const $ul = document.getElementsByTagName('ul')[0]
    const $li = document.createElement('li')
    const $div = document.createElement('div')
    $div.className += 'checkbox'
    const $label = document.createElement('label')
    const $input = document.createElement('input')
    $input.className += 'task-item'
    $input.setAttribute('type','checkbox')
    $input.setAttribute('name','tarefa')
    $input.addEventListener('click', alternarRemoçao)
    $label.appendChild($input)
    $label.appendChild(document.createTextNode(novaTarefa))
    $div.appendChild($label)
    $li.appendChild($div)
    $ul.appendChild($li)
    document.getElementsByClassName('new-task') = ''
}

function alternarRemoçao(e){
    const $li = e.currentTarget.closest('li')
    $li.classList.toggle('removed')
}

document.getElementsByClassName('add-task')[0].addEventListener('click', adicionarTarefa)

const tarefas = document.getElementsByClassName('task-item')
Array.from(tarefas).forEach(tarefa => tarefa.addEventListener('click', alternarRemoçao))

document.getElementsByClassName('alterar-titulo')[0].addEventListener('keyup', mudarTitulo)