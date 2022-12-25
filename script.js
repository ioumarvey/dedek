const DICE = 60;


  var form = document.getElementById("myForm");


  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var result = document.getElementById("roll").value;

if (result > DICE) {
        alert("cos ci sie pojebalo szefie");
      } else {
        result %= 15;
        if (result == 0) result = 15;
        alert(`Item, który otrzymujesz to ${result}.`);
      }
    }
  );
