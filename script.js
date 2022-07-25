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

    if(qtdDet.value == "" || qtdPas.value == "" || qtdProm.value == ""){
        alert("Preencha todos os campos!");
        return;
    } 

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
    qtdDet.value = "";
    qtdPas.value = "";
    qtdProm.value = "";


    resultNumber.innerHTML = "0%";
    resultText.innerHTML = "Classificação";

    resultDetratores.innerHTML = "0%";
    resultPassivos.innerHTML = "0%";
    resultPromotores.innerHTML = "0%";
}



function baixar(){
    var dados = document.querySelector('#dados').innerHTML;

    var janela = window.open("", "", "width=700, height=700");
    janela.document.write('<html> <head>')
    janela.document.write('<title>Resultado NPS - PDF</title> </head>')
    janela.document.write('<body>')
    janela.document.write(dados)
    janela.document.write('</body> </html>')
    janela.document.close();
    janela.print();
}


