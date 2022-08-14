input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    basic.showNumber(max)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Temp = randint(input.temperature(), 50)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.showNumber(Temp)
    basic.pause(900)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    basic.showNumber(min)
    basic.clearScreen()
})
let Temp = 0
let min = 0
let max = 0
let TEMPERATURA = input.temperature()
max = TEMPERATURA
min = TEMPERATURA
basic.forever(function () {
    TEMPERATURA = input.temperature()
    if (TEMPERATURA < min) {
        min = TEMPERATURA
    }
    if (TEMPERATURA > max) {
        max = TEMPERATURA
    }
    basic.pause(900)
    basic.clearScreen()
    basic.pause(900)
    basic.showString(".")
})
