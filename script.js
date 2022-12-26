const DICE = 60;


  var form = document.getElementById("myForm");


  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var result = document.getElementById("roll").value;
    var list = document.getElementById("lists").value;


if (result > DICE || result < 1) {
        alert("cos ci sie pojebalo szefie");
      } else {
        result %= list;
        if (result == 0) result = list;
        alert(`Item, który otrzymujesz to ${result}.`);
      }
    }
  );
