var ponto = 0
var ponto2 =0
//pedra ganha de tesoura
//papel ganha de pedra
//tesoura ganha de papel
function play() {
    var num = document.getElementById('txtn')
    var resp = document.getElementById('res')
    var resp2 = document.getElementById('res2')
    
    var jogada1= document.getElementById('jogada1')
    var jogada1_texto = jogada1.options[jogada1.selectedIndex].text
    var jg1_n = jogada1.options[jogada1.selectedIndex].value

    var jogada2 = document.getElementById('jogada2')
    var jogada2_texto = jogada2.options[jogada2.selectedIndex].text
    var jg2_n = jogada2.options[jogada2.selectedIndex].value

    var player1 = "ANA"
    var player2 = "Erika"
    if (jg1_n == jg2_n){ 
        alert('EMPATOU !')
    }
    if ((jg1_n == 1 && jg2_n == 3) || (jg1_n == 2 && jg2_n == 1) || (jg1_n == 3 && jg2_n == 2)) { 
        ponto = ponto + 1    
        resp.innerHTML = `<p> ${player1} : ${ponto} </p>`
        
    }
    if ((jg1_n == 3 && jg2_n == 1) || (jg1_n == 1 && jg2_n == 2) || (jg1_n == 2 && jg2_n == 3)) {
        ponto2 = ponto2 + 1
        resp2.innerHTML = `<p> ${player2} : ${ponto2} </p>`
    }

}

