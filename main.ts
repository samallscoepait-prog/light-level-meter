let reading = 0
music.setVolume(255)
for (let index = 0; index < 1; index++) {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
}
basic.forever(function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    reading,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
})
