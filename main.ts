input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.pause(3000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(steps)
    steps = 0
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(50)
    basic.clearScreen()
    steps += 2
})
let steps = 0
steps = 0
