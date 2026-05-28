n = parseInt(prompt("Digite a nota final: "));

switch (true) {
    case (n == 10 || n == 9): {
        document.write("<p>Classificação: A</p>");
        break;
    }
    case (n == 7 || n == 8): {
        document.write("<p>Classificação: B</p>");
        break;
    }
    case (n == 6 || n == 5): {
        document.write("<p>Classificação: C</p>");
        break;
    }
    case (n == 4 || n == 3): {
        document.write("<p>Classificação: D</p>");
        break;
    }
    default: {
        document.write("<p>Classificação: F</p>")
    }
}