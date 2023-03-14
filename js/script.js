let display = document.querySelector('#display')
let botoes = document.querySelectorAll('button')
var reseta = false
var ultimocalculo = 0
botoes.forEach((i) => {
    let valor = i.id
    i.addEventListener('click', () => {
        switch (valor){
            case '=':
                if(display.value.includes('/0')){
                    display.value = 'Indivisivel por 0'
                    reseta = true
                    ultimocalculo = ''
                    return
                }
                try{
                    let calculo = eval(display.value)
                    //Não recomendo o uso do "eval()", como o projeto é local e muito simples foi usado
                    //Portanto, para projeto maiores e querer ter uma calculadora, usasse a lib "Math.js"
                    display.value = calculo
                    ultimocalculo = calculo
                }catch (e){
                    display.value = 'ERR!'
                }
                reseta = true
                break
            case 'ac':
                display.value = ''
                reseta = false
                break
            case 'de':
                display.value = display.value.slice(0, display.value.length - 1)
                reseta = false
                break
            default:
                if(reseta){
                    display.value = ultimocalculo
                    reseta = false
                }
                display.value += valor
                break
        }
    })
})
