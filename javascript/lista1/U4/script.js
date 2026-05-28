vo = parseInt(prompt("Digite o valor da compra: "))

if (vo > 100) {
    vo = vo - vo/10
}

document.write(`<p>Valor total da compra: ${vo}</p>`)