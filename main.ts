input.onButtonPressed(Button.B, function () {
    game.setScore(6)
})
input.onPinPressed(TouchPin.P1, function () {
    game.addScore(-1)
    music.playTone(988, music.beat(BeatFraction.Whole))
})
game.setScore(6)
basic.forever(function () {
    basic.showNumber(game.score())
    if (game.score() == 0) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
        game.gameOver()
    }
})
