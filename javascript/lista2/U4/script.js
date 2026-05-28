n = prompt("Digite o nome de uma fruta que comece com A (não use letra maiúscula): ");

switch (n) {
    case "amora": {
        document.write("<p>Essa fruta é pequena.</p>");
        break;
    }
    case "abacate": {
        document.write("<p>Essa fruta é verde.</p>");
        break;
    }
    case "abacaxi": {
        document.write("<p>Essa fruta tem uma aparência temerosa.</p>");
        break;
    }
     case "acerola": {
        document.write("<p>Essa fruta é bonita.</p>");
        break;
    }
    case "ameixa": {
        document.write("<p>Essa fruta é muito boa.</p>");
        break;
    }
    default: {
        document.write("<p>Não sei nada sobre essa fruta.</p>")
    }
}