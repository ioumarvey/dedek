const DICE = 60;


  var form = document.getElementById("myForm");


  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var inputString = document.getElementById("roll").value;

    var numbers = inputString.split(/[\s,]+/);

    for (var i = 0; i < numbers.length; i++) {
      var result = numbers[i];

if (result > DICE) {
        alert("cos ci sie pojebalo szefie");
      } else {
        result %= 15;
        if (result == 0) result = 15;
        alert(`Item, który otrzymujesz to ${result}.`);
      }
    }
  });