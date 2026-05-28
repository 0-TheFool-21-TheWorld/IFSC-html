n1 = parseInt(prompt("Digite a primeira nota: "))
n2 = parseInt(prompt("Digite a segunda nota: "))

var media = (n1 + n2)/2

document.write(`<p>Nota 1: ${n1} | Nota 2: ${n2} | Média: ${media}</p>`)

if (media >= 9) {
    conceito = "A"
    resultado = "Aprovado"
}

else if (media >= 7.5) {
    conceito = "B"
    resultado = "Aprovado"
}

else if (media >= 6) {
    conceito = "C"
    resultado = "Aprovado"
}

else if (media >= 4) {
    conceito = "D"
    resultado = "Reprovado"
}

else  {
    conceito = "E"
    resultado = "Reprovado"
}

document.write(`<p>Conceito: ${conceito}</p>`)
document.write(`<p>${resultado}</p>`)