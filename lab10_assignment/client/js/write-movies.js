//Create a jQuery listener that waits for the user to enter submit

// function called from write-movies page, script near bottom on page

$("#data-submit").click(function() {

    // gets value from form fields
    var rank = $("#rank").val();
    var movieTitle = $("#movieTitle").val();
    var year = $("#year").val();
    var director = $("#director").val();
    var rating = $("#rating").val();
    var users = $("#users").val();

    // formats data as JSON
    var jsonString = {
        rank: rank,
        movieTitle: movieTitle,
        year: year,
        director: director,
        rating: rating,
        users: users
    };

    // POST method passes "data" value to req.body.data, sent to app.post("/write-record")
    $.ajax({
        url: moviesURL + "/write-record",
        type: "post",
        data: jsonString,
        success: function(response) {
            alert(response);
        },
        error: function(err) {
            alert(err);
        }
    });
});