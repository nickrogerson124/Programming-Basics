input.onButtonPressed(Button.A, () => {
    while (true) {
    basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
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
}
})
input.onButtonPressed(Button.B, () => {
    while (true) {
    basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
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
            . . # . .
            . # # # .
            . . # . .
            `)
    basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            # # # . .
            . # . . .
            `)
}
})
input.onButtonPressed(Button.AB, () => {
    for (let i = 0; i < 2; i++) {
    basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
    basic.showLeds(`
            . . . . .
            . . . # .
            . . # # #
            . . . # .
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
            . # . . .
            # # # . .
            . # . . .
            . . . . .
            `)
}
})