
    let favMovie = "pursuit of happyness";

    function checkGuess() {
      let userGuess = document.getElementById("movieGuess").value.trim().toLowerCase();
      let message = document.getElementById("message");
      let inputField = document.getElementById("game");

      if (userGuess === favMovie.toLowerCase()) {
        message.textContent = "🎉 Congratulations buddy! You guessed it!";
        message.style.color = "#1DB954";
      } else {
        inputField.innerHTML = "<div class='message' style='color:red;'>❌ You lose! Better luck next time!</div>";
      }
    }

























// Notes:-
// double asterisk for power   2**8 = 256
// NaN is a not defined number in JavaScript
// template literal is done as f string in python with help of ``
// Logical Operators:- 1}(exp1 && exp2)-logical and operator/ 2}(exp1 || exp2)- logical or operator/ 3}( !exp1 )-logical not operator.
