function verificar() {

    var cap = document.getElementById('peso')

    if (cap.value <= 0) {
        window.alert('Preencha o campo corretamente!')
        res.innerHTML = ('Valor não aceito!')
    } else {
        peso = (cap.value * 0.35 / 10).toFixed(2).replace(".", ",")
        res.innerHTML = `Você tem que ingerir um total de ${peso} litro(s) de água por dia!`
    }
    res.style.textAlign = 'center'
}