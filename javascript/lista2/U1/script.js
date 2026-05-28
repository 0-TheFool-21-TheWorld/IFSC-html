n = parseInt(prompt("Digite a forma de pagamento (1 para débito, 2 para crédito e 3 para dinheiro): "));

switch (n) {
    case 1: {
        document.write("<p>Você escolheu débito</p>");
        break;
    }
    case 2: {
        document.write("<p>Você escolheu crédito</p>");
        break;
    }
    case 3: {
        document.write("<p>Você escolheu dinheiro</p>");
        break;
    }
}