n1 = parseInt(prompt("Digite a primeira nota: "))
n2 = parseInt(prompt("Digite a segunda nota: "))

if (n1 + n2 == 20) {
    document.write("<p>Aprovado com distinção</p>")
}
else if ((n1 + n2) / 2 >= 7) {
    document.write(`<p>Aprovado</p>`)
}
else {
    document.write(`<p>Reprovado</p>`)
}