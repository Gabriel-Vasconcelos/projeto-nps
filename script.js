var qtdDet = document.getElementById("qtd-det");
var qtdPas = document.getElementById("qtd-pas");
var qtdProm = document.getElementById("qtd-prom");

var resultNumber = document.querySelector(".result-number");
var resultText = document.querySelector(".result-text");
var resultDetratores = document.querySelector("#detratores");
var resultPassivos = document.querySelector("#passivos");
var resultPromotores = document.querySelector("#promotores");


function calcular(){
    
    var det = Number(qtdDet.value);
    var pas = Number(qtdPas.value);
    var prom = Number(qtdProm.value);
    var total = det + pas + prom;
    
    var detratores = (det * 100) / total;
    var passivos = (pas * 100) / total;
    var promotores = (prom * 100) / total;

    var resultado = promotores - detratores;

    if(resultado >= -100 && resultado <= -1){
        resultText.innerHTML = 'Ruim'
    } else if(resultado >= 0 && resultado <= 49){
        resultText.innerHTML = 'Razoável'
    } else if(resultado >= 50 && resultado <= 74){
        resultText.innerHTML = 'Muito bom'
    } else if(resultado >= 75 && resultado <= 100){
        resultText.innerHTML = 'Excelente'
    }

    resultNumber.innerHTML = `${resultado.toFixed(2)}%`;
    
    resultDetratores.innerHTML = `${detratores.toFixed(2)}%`;
    resultPassivos.innerHTML = `${passivos.toFixed(2)}%`;
    resultPromotores.innerHTML = `${promotores.toFixed(2)}%`;

    
}


function limpar(){
    document.getElementById("qtd-det").value = "";
    document.getElementById("qtd-pas").value = "";
    document.getElementById("qtd-prom").value = "";
}


