/**
 * Aqui ele mostrará a mensagem para o espetador. Não altere se não quiser destruir o código.
 */
/**
 * Aqui é a seleção de grupo. Não altere se não quiser acabar com o código.
 */
/**
 * Aqui é a mensagem sendo enviada. Não altere se não quiser acabar com o código.
 */
/**
 * Aqui é onde é feita a seleção de grupo.
 * 
 * Não altere se não quiser estragar o código.
 */
function Grupo2 () {
    radio.setGroup(Grupo)
}
input.onPinPressed(TouchPin.P0, function () {
    Grupo = 0
})
/**
 * Serve para enviar a mensagem. Aperte duas vezes para enviar a mensagem.
 */
input.onButtonPressed(Button.A, function () {
    Enviar_mensagem()
})
input.onPinPressed(TouchPin.P2, function () {
    Grupo = 2
})
function Enviar_mensagem () {
    radio.sendString(Mensagem)
}
radio.onReceivedString(function (receivedString) {
    music.playMelody("C5 B C5 B A C5 B G ", 230)
    basic.showString(receivedString)
})
input.onPinPressed(TouchPin.P1, function () {
    Grupo = 1
})
/**
 * Aqui é o início do código. Não altere se não quiser alterar seu código de forma mortal.
 */
let Mensagem = ""
let Grupo = 0
Grupo()
Grupo = 0
/**
 * Aqui é escolhida a mensagem que você quer enviar. Para enviar uma mensagem personalizada, basta alterar oque está entre aspas.
 */
basic.forever(function () {
    Mensagem = "Bom dia"
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showString("Grupo 0")
        radio.setGroup(0)
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showString("Grupo 1")
        radio.setGroup(1)
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        basic.showString("Grupo 2")
        radio.setGroup(2)
    }
})
