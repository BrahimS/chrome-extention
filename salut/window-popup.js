'use-strict';

(function () {
  var input = document.querySelector('#name');
  var salut = document.querySelector('#salut');

  input.addEventListener('keyup', function () {
    salut.textContent = 'Bonjour ' + input.value;
  });


}());