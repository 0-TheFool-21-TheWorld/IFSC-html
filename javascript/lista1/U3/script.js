var valor = parseInt(prompt("Digite sua idade: "))

    if (valor < 13) {
        document.write("<p>Você é classificado como criança</p>")
    }
    else if (valor < 18) {
        document.write("<p>Você é classificado como adolescente</p>")
    }
    else if (valor < 60) {
        document.write("<p>Você é classificado como adulto</p>")
    }
    else {
        document.write("<p>Você é classificado como idoso</p>")
    }