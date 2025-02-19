/* functions.js */

function calcNumbers() {
  var number1 = document.getElementById('number1').value
  var number2 = document.getElementById('number2').value
  var calc    = document.getElementById('calc')
    [document.getElementById('calc').selectedIndex].innerHTML

  document.getElementById('result').innerHTML = number1 + ' ' + calc +
' ' + number2

  var calc_op = document.getElementById('calc').value
  var calc_result = 0
  if (calc_op == "add") {
    calc_result = Number(number1) + Number(number2)
  } else if (calc_op == "multiply") {
    calc_result = Number(number1) * Number(number2)
  }  else if (calc_op == "subtract") {
      calc_result = Number(number1) - Number(number2)
  } else if (calc_op == "divide") {
      calc_result = Number(number1) / Number(number2)
  }

  document.getElementById('calc_result').innerHTML = calc_result
}

function calcNumbers2() {
  var number1 = $('#number1').val()
  var number2 = $('#number2').val()

  var calc    = $('#calc option:selected').text()

  $('#result').html( number1 + ' ' + calc + ' ' + number2 )

  var calc_op = $('#calc').val()
  var calc_result = 0
  if (calc_op == "add") {
    calc_result = Number(number1) + Number(number2)
  } else if (calc_op == "multiply") {
    calc_result = Number(number1) * Number(number2)
  }  else if (calc_op == "subtract") {
      calc_result = Number(number1) - Number(number2)
  } else if (calc_op == "divide") {
      calc_result = Number(number1) / Number(number2)
  }

  $('#calc_result').html( calc_result )
}

function writeToStorage() {
      if (typeof(Storage) !== "undefined") {
        if ($('#key').val() != "" && $('#value').val() != "") {
          localStorage.setItem($('#key').val(), $('#value').val())
          alert('Gespeichert')
        } else {
          alert('Nicht gespeichert, da Daten fehlen')
        }
      } else {
        console.log('Web-Storage nicht unterstützt')
      }
    }



$('document').ready(function() {

  $('#go').click(function(){getLocation()})
  $('#save').click(function(){writeToStorage()})


  $('#number1').change(function() {calcNumbers2()})
  $('#number2').change(function() {calcNumbers2()})
  $('#calc').change(function() {calcNumbers2()})


  $('#open').click(function() {
    $('#open').css('display', 'none')
    $('#close').css('display', 'inline-block')
    $('nav').fadeIn('show')
  })

  $('#close').click(function() {
    $('#open').css('display', 'inline-block')
    $('#close').css('display', 'none')
    $('nav').fadeOut('show')
  })

  $( "form" ).submit(function( event ) {
    $.post( "http://ajax.html-css-kompendium.de", function() {})
    .done(function(data) {
      if (data.code == 200) {
        alert( data.message )
      } else if (data.code == 400) {
        alert( data.message )
      } else {
        alert( 'Irgendwas ging schief - JavaScript-Konsole öffnen' )
      }
    })
    .fail(function() {
      alert( 'Irgendwas ging schief - JavaScript-Konsole öffnen' )
    })
    event.preventDefault()
  })


})
