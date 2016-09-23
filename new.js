document.addEventListener('DOMContentLoaded', init)

function init () {
  var breakfast = document.getElementById('breakfast-foods')
  var lunch = document.getElementById('lunch-foods')
  var button = document.getElementById('brunch')

  button.addEventListener('click', transfer)

  function transfer () {
    var breakfastAllList = breakfast.querySelectorAll('li')

    if (breakfastAllList.length > 0) {
      // alert('this is an alert')
      var lastList = breakfast.querySelector('li:last-child')
      var removedList = breakfast.removeChild(lastList)

      lunch.appendChild(removedList)
    } else {
      alert('breakfast is empty')
    }
  }
}
