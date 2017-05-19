$( document ).ready(function() {

  var randNumber = Math.floor(Math.random() * 50);
  var imageOneValue = Math.floor(Math.random() * 10);
  var imageTwoValue = Math.floor(Math.random() * 10);
  var imageThreeValue = Math.floor(Math.random() * 10);
  var imageFourValue = Math.floor(Math.random() * 10);
  var wins = 0;
  var total = 0;
  var losses = 0;
  var currentValue = randNumber;
  console.log(currentValue);
  $("#current_value").html(randNumber);

  function resetValues() {
    randNumber = Math.floor(Math.random() * 50);
    imageOneValue = Math.floor(Math.random() * 10);
    imageTwoValue = Math.floor(Math.random() * 10);
    imageThreeValue = Math.floor(Math.random() * 10);
    imageFourValue = Math.floor(Math.random() * 10);
    total = 0;
    currentValue = randNumber;
    $("#current_value").html(randNumber);
  };

  function conditionals() {
    if (total === currentValue ) {
        $('#winOrLose').html("You Win!");
        resetValues();
        wins += 1;
        $('#wins').html(wins);
      } 
      if (total > currentValue) {
        $('#winOrLose').html("Sorry, You Lose!");
        resetValues();
        losses += 1
        $('#losses').html(losses);
      }
      else {
        $('#total_score').html(total);
      }
    };

  if (total < currentValue) {
    console.log(currentValue)
    $('#winOrLose').html("Keep Trying!");
    $("#image_1").click(function() {
      total += imageOneValue;
      conditionals();
    });

    $("#image_2").click(function() {
      total += imageTwoValue;
      conditionals();
    });

    $("#image_3").click(function() {
      total += imageThreeValue;
      conditionals();
    });

    $("#image_4").click(function() {
      total += imageFourValue;
      conditionals();
    });
  };
});            