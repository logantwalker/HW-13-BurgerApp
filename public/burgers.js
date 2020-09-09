$(function(){
    $(".devour").click(function(event){
        id = $(this).data("id");
        let devoured = true;
    });

    $('.add_burger').on("submit",event =>{
        let newBurger = $("#add_burger").val();
        console.log(newBurger);

        var burgerObj = {
            burger_name: newBurger,
            devoured: false
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerObj
        }).then(
            function() {
              console.log("created new cat");
              // Reload the page to get the updated list
              location.reload();
            }
        );
    });
});

