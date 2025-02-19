var display = document.getElementById('display')
display.innerHTML = '0'

var current = display.innerHTML
var first = 0
var newline = 0
var op = null
const ops = ['bplus', 'bminus', 'bmult', 'bdiv']


var buttons = document.getElementsByTagName('a');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {

    if (!isNaN(Number(this.id))) {

      if (newline) {
        current = 0
        newline = 0
      } else {
        current = display.innerHTML;
      }
      if (Number(current) != 0) {
        current = current + this.id
      } else {
        current = this.id
      }
      display.innerHTML = current

    } else {

      if (this.id == 'bcomma') {
        //komma einfuegen sofern noch keines vorhanden
        if (current.indexOf('.') == -1) {
          current = current + '.'
          display.innerHTML = current
          console.debug(current)
        }
      } else if (ops.indexOf(this.id) !== -1 ) {
        //hier wird gerechnet
          console.debug('rechner')
          if (first) {
            //wenn bereits eine Zahl im Speicher, rechne mit dieser
            if (this.id == 'bplus') {
              first = first + Number(current)
            } else if (this.id == 'bminus') {
              first = first - Number(current)
            } else if (this.id == 'bmult') {
              first = first * Number(current)
            } else if (this.id == 'bdiv') {
              first = first / Number(current)
            }
          } else {
            //ansonsten ist die erste Zahl die aktuelle Zahl
            first = Number(current)
          }
          newline = 1
          op = this.id
          display.innerHTML = first


      } else if (this.id == 'bres') {
        if (op == 'bplus') {
          first = first + Number(current)
        } else if (op == 'bminus') {
          first = first - Number(current)
        } else if (op == 'bmult') {
          first = first * Number(current)
        } else if (op == 'bdiv') {
          first = first / Number(current)
        }
        current = first
        first = 0
        display.innerHTML = current

      } else if (this.id == 'AC') {
        current = 0
        first = 0
        op = null
        display.innerHTML = current
      } else if (this.id == 'C') {
        current = 0
        display.innerHTML = current
      }

    }

  }
}


//wird fuer die Offline-Funktionalität benötigt
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
};
