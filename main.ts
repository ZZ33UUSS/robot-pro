let Distancia = 0
let Velocidad = 255
basic.forever(function () {
    for (let index = 0; index < 1; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
        basic.showArrow(ArrowNames.North)
        Distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
        if (Distancia < 30) {
            basic.showIcon(IconNames.Chessboard)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Velocidad)
            basic.pause(350)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Velocidad)
            basic.pause(1000)
        }
    }
    for (let index = 0; index < 1; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
        basic.showArrow(ArrowNames.North)
        Distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
        if (Distancia < 30) {
            basic.showIcon(IconNames.Chessboard)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Velocidad)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Velocidad)
            basic.pause(350)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Velocidad)
            basic.pause(1000)
        }
    }
})
