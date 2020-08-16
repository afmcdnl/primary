// Grade 1 outcome - write code in a sequence
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . . #
        `)
})
// Grade 3 outcome - write code in a sequence and repeating events
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            # . . . #
            `)
    }
})
