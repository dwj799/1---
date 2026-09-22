serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receivedString = serial.readUntil(serial.delimiters(Delimiters.NewLine))
})
let task_array: string[] = []
let receivedString = ""
OLED.init(128, 64)
OLED.clear()
OLED.writeString("待机，按A启动")
receivedString = ""
serial.redirect(
SerialPin.P1,
SerialPin.P8,
BaudRate.BaudRate9600
)
let grab_ok = 0
let put_ok = 0
let run_flag = false
basic.showLeds(`
    . # # # .
    # . # . #
    # # # # #
    . # # # .
    . # # # .
    `)
let state = 0
basic.forever(function () {
    let run_flagfalse = 0
    if (run_flagfalse) {
        if (input.buttonIsPressed(Button.A)) {
            control.waitMicros(2000000)
            run_flag = true
            OLED.clear()
            OLED.writeStringNewLine("比赛开始")
            state = 0
        }
    } else {
        let state4 = 0
        let state3 = 0
        let state2 = 0
        let state1 = 0
        if (state1) {
        	
        } else if (state2) {
        	
        } else if (state3) {
        	
        } else if (state4) {
        	
        } else {
        	
        }
        if (!("receivedsTring".isEmpty())) {
            task_array = "receivedString".split("+")
            state = 1
        }
    }
    OLED.clear()
    OLED.writeString("\"任务码:\"+receivedString")
    OLED.writeString("\"抓取:\"+grab_ok+\"放置:+put_ok")
})
