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
    var nps_Title = document.querySelector("#nps-title").innerHTML;
    var nps_Result_number = document.querySelector(".result-number").innerHTML;
    var nps_result_text = document.querySelector(".result-text").innerHTML;
    var nps_Calc = document.querySelector(".nps-calc").innerHTML;
    

    var janela = window.open("", "", "width=700, height=700");
    janela.document.write('<html> <head>')
    janela.document.write('<title>Resultado NPS - Digital College</title> </head>')
    janela.document.write('<>')
    janela.document.write(`<h1>${nps_Title}</h1>`)	
    janela.document.write(`<h2>${nps_Result_number}</h2>`)
    janela.document.write(`<h2>Classificação: ${nps_result_text}</h2> <p>(Ruim: entre -100 e -1) (Razoável: entre 0 e 49) (Muito bom: entre 50 e 74) (Excelente: entre 75 e 100)</p> `)
    janela.document.write(`<p>${nps_Calc}</p>`)
    janela.document.write('<p>Detratores: consiste nas pessoas que deram uma nota entre 0 e 6.</p>')
    janela.document.write('<p>Passivos: consiste nas pessoas que deram uma nota entre 7 e 8.</p>')
    janela.document.write('<p>Promotores: consiste nas pessoas que deram uma nota entre 9 e 10.</p>')
    janela.document.write('</body> </html>')
    janela.document.close();
    janela.print();
}


