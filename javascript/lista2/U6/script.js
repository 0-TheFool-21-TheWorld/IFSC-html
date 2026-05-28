idade = parseInt(prompt("Digite sua idade: "))

switch (true) {
    case (idade < 13): {
        document.write("<p>Classificação: Criança</p>");
        break;
    }
    case (idade < 18): {
        document.write("<p>Classificação: Adolescente</p>");
        break;
    }
    case (idade < 60): {
        document.write("<p>Classificação: Adulto</p>");
        break;
    }
    default: {
        document.write("<p>Classificação: Idoso</p>")
    }
}