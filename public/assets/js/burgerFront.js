$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      let newBurger = {
        name: $("#burgerInput").val().trim(),
      };
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".devour-burger").on("click", function(event) {
      let id = $(this).data("id");
      let isDevoured = $(this).data("isDevoured");

      let isDevouredState = {
        devoured: isDevoured
      };
     
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevouredState
      }).then(
        function() {
          console.log("devoured burger", isDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
