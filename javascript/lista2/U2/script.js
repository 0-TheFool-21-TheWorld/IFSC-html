n = prompt("Digite a classificação indicativa do filme: ");

switch (n) {
    case "l" || "L" || "livre" || "Livre": {
        document.write("<p>Histórias adequadas para todo o público, sem conteúdo potencialmente prejudicial.</p>");
        break;
    }
    case "10": {
        document.write("<p>Conteúdos com violência leve e linguagem imprópria branda.</p>");
        break;
    }
    case "12": {
        document.write("<p>Cenas com agressão física moderada, insinuação de uso de drogas ou insinuação leve de sexo.</p>");
        break;
    }
    case "14": {
        document.write("<p>Cenas com agressão física moderada, insinuação de uso de drogas ou insinuação leve de sexo.</p>");
        break;
    }
    case "16": {
        document.write("<p>Consumo de drogas explícito, agressão física acentuada e insinuação de sexo acentuada.</p>");
        break;
    }
    case "18": {
        document.write("<p>Violência extrema, suicídio, cenas de sexo explícitas, consumo e indução ao consumo de drogas.</p>");
        break;
    }
}