// ==============================================================
// P5js to Arduino webSocket communication
// using UNO R4 WiFi WebSocket Server
// by Scott Mitchell
//
// ==============================================================
//
// JSON key: value pairs
// example data
// {
//  "header": {
//     "version": number,
//  }
//  "data":
//    [
//      {
//        "action": "pinMode"/"digitalRead"/"analogRead"/"digitalWrite"/"analogWrite",
//        "pin": number,
//        "value": 0/1/0-255/"INPUT"/"INPUT_PULLUP"/"OUTPUT"
//        "interval": number
//       },
//      {
//        "action": "pinMode",
//        "pin": number,
//        "value": "INPUT"
//       },
//     ]
// }
//

let ArduinoIP = 'ws://172.20.10.13:81/';

let buttonPin = 7;
let buttonState = false;
let LEDpin = 10;
let LEDstate = false;
let potPin = A0;
let dialValue = 0;

function setup() {
    createCanvas(600, 600);

    InitWebSocket(ArduinoIP);

    pinMode(LEDpin, OUTPUT);
    pinMode(buttonPin, INPUT_PULLUP);
    pinMode(potPin, ANALOG_INPUT);
}

function draw() {
    // draw division on screen
    background(0, 100, 0);

    let LEDvalue = map(mouseX, 0, width, 0, 255);
    analogWrite(LEDpin, LEDvalue);

    buttonState = digitalRead(buttonPin);
    if(buttonState) {
        fill(255, 0, 0);
    } else {
        fill(0, 0, 255);
    }
    dialValue = analogRead(potPin);
    if(dialValue){
    let rad = map(dialValue, 0, 4095, 0, width*2);
    circle(width/2,  height/2, rad);
   }
 }