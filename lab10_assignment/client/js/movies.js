//Create a jQuery listener that waits for the user to enter submit

// function called from write-movies page, script near bottom
function activateSubmitButton() {
    $("#data-submit").click(function() {

        // gets value from form fields
        var rank = $("#rank").val();
        var movieTitle = $("#movieTitle").val();
        var year = $("#year").val();
        var director = $("#director").val();
        var rating = $("#rating").val();
        var users = $("#users").val();

        // generates unique ID number
        var d = new Date();
        var ID = "mov" + d.getTime();

        // formats data as JSON
        var jsonString = JSON.stringify({
            ID: ID,
            rank: rank,
            movieTitle: movieTitle,
            year: year,
            director: director,
            rating: rating,
            users: users
        });

        // POST method passes "data" value to req.body.data, sent to app.post("/write-record")
        $.ajax({
            url: "http://localhost:5500/write-record",
            type: "post",
            data: {
                data: jsonString
            },
            success: function(response) {
                alert(response);
            },
            error: function(err) {
                alert(err);
            }
        });
    });
}

// retrieve the movie data and populate on page load, sent by app.get("/read-records")
function getMovieData() {
    $.ajax({
        url: "http://localhost:5500/read-records",
        type: "get",
        success: function(response) {
            var data = jQuery.parseJSON(response);
            createMovieTable(data);
        },
        error: function(err) {
            alert(err);
        }
    });
}

// inserts table row of data inside display table
function createMovieTable(movieData) {
    var tableHTML;

    for (var i = 0; i < movieData.length; i++) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + movieData[i].ID + "</td>";
        tableHTML += "<td>" + movieData[i].rank + "</td>";
        tableHTML += "<td>" + movieData[i].movieTitle + "</td>";
        tableHTML += "<td>" + movieData[i].year + "</td>";
        tableHTML += "<td>" + movieData[i].director + "</td>";
        tableHTML += "<td>" + movieData[i].rating + "</td>";
        tableHTML += "<td>" + movieData[i].users.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</td>";
        tableHTML += "</tr>";
    }

    // id of tbody in browse-movies page's display table
    $("#movieTable").html(tableHTML);
}