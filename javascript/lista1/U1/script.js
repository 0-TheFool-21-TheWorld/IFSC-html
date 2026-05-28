n1 = parseInt(prompt("Digite o primeiro número: "))
n2 = parseInt(prompt("Digite o segundo número: "))

if (n1 > n2) {
    document.write(`Maior: ${n1}`)
}
else if (n1 == n2) {
    document.write("<p>Os números são iguais.</p>")
}
else {
    document.write(`Maior: ${n2}`)
}