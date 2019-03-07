
$(document).ready( function() {
  choices = ["rock", "paper", "scissors"]
  var choice
  var choice2
  var randomChoice = choices[Math.floor(Math.random() * choices.length)]

  $(".button")
    .click(function () {

      switch (this.value) {
        case "rock":
          choice = "Rock"
          break;
        case "paper":
          choice = "Paper"
          break;
        case "scissors":
          choice = "Scissors"
      }
      $("#ur_choice").text(choice)
    })

    .click(function() {

      switch (randomChoice) {
        case "rock":
          choice2 = "Rock"
          break;
        case "paper":
          choice2 = "Paper"
          break;
        case "scissors":
          choice2 = "Scissors"
      }
      $("#comp_choice").text(choice2)
    })

    .click(function() {
      if (choice === choice2) {
        $("#display").html("<h1>BUST!!! TRY AGAIN!</h1>")
      }
      else {
        result()
      }
    })

    function result() {
      switch (choice) {
        case "Rock":
          if (choice2 === "Paper") 
            $("#display").html("<h1>YOU LOSE!!!</h1>")
          else if (choice2 === "Scissors") 
            $("#display").html("<h1>YOU WIN!!!</h1>")
        break;

        case "Paper":
          if (choice2 === "Scissors") 
            $("#display").html("<h1>YOU LOSE!!!</h1>")
          else if (choice2 === "Rock") 
            $("#display").html("<h1>YOU WIN!!!</h1>")
        break;

        case "Scissors":
          if (choice2 === "Rock") 
            $("#display").html("<h1>YOU LOSE!!!</h1>")
          else if (choice2 === "Paper") 
            $("#display").html("<h1>YOU WIN!!!</h1>")
        break;
      }
    }

    $("#reset").click(function () {
      location.reload()
    })
  
})