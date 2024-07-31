let option = Number(prompt(`
 Olá usuário! Digite o número da opção desejada
    
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
`))
let items = []

while (option != 3) {
  option = Number(prompt(`
 Olá usuário! Digite o número da opção desejada
    
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
`))
  switch (option) {
    case 1:
      let item = prompt("digite o nome do item")
      items.push(item)
      break;
    case 2:
      if (items.length == 0) {
        alert('Não há items cadastrados')
      }
      else {
        alert(items)
      }
      break
    case 3:
      alert('fechando')
      break
    default:
      alert('opção inválida. Tente Novamente')

  }
}

