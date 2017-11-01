input.onGesture(Gesture.Shake, () => {
    basic.showString("I am a bouncing ball")
})

basic.forever(() => {
    if (input.buttonIsPressed(Button.AB)) {
    basic.showLeds(`
            . . . . .
            . . . # .
            . . # # #
            . . . # .
            . . . . .
            `);
    basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            . . . . .
            `);
    basic.showLeds(`
            . . . . .
            . # . . .
            # # # . .
            . # . . .
            . . . . .
            `)
    basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
} else if (input.buttonIsPressed(Button.A)) {
    basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            . . . . .
            `)
    basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
} else if (input.buttonIsPressed(Button.B)) {
    basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . # # #
            . . . # .
            `)
    basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            . . . . #
            `)
    basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            `)
    basic.clearScreen()
    basic.pause(10000)
} else {
    basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
}
})