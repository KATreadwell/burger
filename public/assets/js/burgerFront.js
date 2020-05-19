$(function() {
    $("#submit").on("click", function(event) {
      event.preventDefault();
      let newBurger = {
        name: $("#burgerInput").val().trim()
      };
      $.post("/api/burgers", newBurger)
      .then(function(data) {
        console.log("created new burger");
        location.reload();
      })
    });
  
    $(".devour-burger").on("click", function(event) {
      let id = $(this).data("id");
      let isDevoured = $(this).data("isdevoured");
      
      let isDevouredState = {
        devoured: !isDevoured
      };
      console.log("test :")
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevouredState
      }).then(
        function() {
          console.log("devoured burger", isDevoured);
          location.reload();
        }
      );
    });
  });

