input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    basic.showNumber(max)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.No)
    Temp = randint(input.temperature(), 50)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.showNumber(Temp)
    basic.clearScreen()
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
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
    basic.showString(".")
    TEMPERATURA = input.temperature()
    if (TEMPERATURA < min) {
        min = TEMPERATURA
    }
    if (TEMPERATURA > max) {
        max = TEMPERATURA
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
