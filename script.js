const form = document.querySelector('form')
const ul = document.querySelector('ul')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    //Estou selecionando o campo de entrada 'input' e pegando o valor dele com 'input.value'
    const input = form.querySelector('input')
    const value = input.value

    //Criando um elemento 'li' e atribuindo o valor do input com li.textContent, com o setAttribute colocando o css do tailwind
    if (value != '') {
        const li = document.createElement('li')
        li.textContent = value
        li.setAttribute("class", "px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between")


        //Criando o botão que está presente no 'li'
        const button = document.createElement('button')
        button.textContent = "x"
        button.setAttribute("class", "text-red-700 delete")

        ul.appendChild(li)
        li.appendChild(button)

        input.value = ''
    } else {
        input.placeholder = 'coloque um nome para o seu item!'
    }
})

ul.addEventListener('click', function(event){
    if(event.target.classList.contains('delete')) {
        if(confirm("Deseja deletar esse item?")){
            event.target.parentElement.remove()
        }
    }
})