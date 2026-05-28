nome = prompt("Digite o nome do estudante: ")
n1 = parseInt(prompt("Digite a primeira nota: "))
n2 = parseInt(prompt("Digite a segunda nota: "))
n3 = parseInt(prompt("Digite a terceira: "))

var media = (n1 + n2 + n3)/3

document.write(`<p>Média: ${media}, Nome: ${nome}</p>`)

if (media == 10) {
    document.write(`<p>Aprovado com distinção</p>`)
}

else if (media >= 7) {
    document.write(`<p>Aprovado</p>`)
}

else {
    document.write("<p>Reprovado</p>")
}