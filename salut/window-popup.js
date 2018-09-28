(function () {
  var input = document.querySelector('#name');
  var salut = document.querySelector('#salut');

  input.addEventListener('keyup', function () {
    salut.textContent = 'Bonjour ' + input.value;
  });



}());

// $(function () {
//   $('#name').keyup(function () {
//     $('#salut').text('Salut ' + $('#name').val());
//   });
// });