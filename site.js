function ofertaLimitada(){

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mess = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();

    switch (mess){
        case "01":
            mes = "Janeiro"
            break
        case "02":
            mes = "Fevereiro"
            break
        case "03":
            mes = "Março"
            break
        case "04":
            mes = "Abril"
            break
        case "05":
            mes = "Maio"
            break
        case "06":
            mes = "Junho"
            break
        case "07":
            mes = "Julho"
            break
        case "08":
            mes = "Agosto"
            break
        case "09":
            mes = "Setembro"
            break
        case "10":
            mes = "Outubro"
            break
        case "11":
            mes = "Novembro"
            break
        default:
            mes = "Dezembro"
            break
    }

    dataAtual = dia + ' de ' + mes + ' de ' + ano;
    textData = document.getElementById("limited").textContent="Jundiaí, " + dataAtual
    timeOferta()
}

function timeOferta(){
    var data = new Date();
    var hour = data.getHours();
    var minutes = data.getMinutes();
    var seconds = data.getSeconds();

    var offerHour = 24 - hour
    var offerMinute = 60 - minutes
    var offerSecond = 60 - seconds

    if(offerHour < 10){
        offerHour = "0" + offerHour
    }
    if(offerMinute <= 9){
        offerMinute = "0" + offerMinute
    }
    if(offerSecond <= 9){
        offerSecond = "0" + offerSecond 
    }

    document.getElementById("time-limited").textContent = offerHour + ":" + offerMinute + ":" + offerSecond  
}

function OcultarPagamento(){  
    document.getElementById("payment-method").style.display = 'none';
    document.getElementById("technical").style.display = 'block';
  
}

var soma = 0
var quantidade = 0
function ValorCompra(price){
    var preco = parseFloat(price)
    soma = soma + preco
    quantidade += 1


    document.getElementById("valor-compra").textContent = "Valor: R$" + soma.toFixed(2)
    document.getElementById("quant").textContent = "Quant: " + quantidade
    document.getElementById("payment-method").style.display = 'block';
    document.getElementById("technical").style.display = 'none';

}


