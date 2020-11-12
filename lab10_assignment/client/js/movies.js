//Create a jQuery listener that waits for the user to enter submit

function activateSubmitButton() {
    $('#data-submit').click(function() {
        var rank = $('#rank').val();
        var movieTitle = $('#movieTitle').val();
        var year = $('#year').val();
        var director = $('#director').val();
        var rating = $('#rating').val();
        var users = $('#users').val();

        var d = new Date();
        var ID = "mov" + d.getTime();

        var jsonString = JSON.stringify({ ID: ID, rank: rank, movieTitle: movieTitle, year: year, director: director, rating: rating, users: users });

        $.ajax({
            url: "http://localhost:5500/write-record",
            type: "post",
            data: { data: jsonString },
            success: function(response) {
                alert(response);
            },
            error: function(err) {
                alert(err);
            }
        });
    });
}

// Retrieve the movie data and populate on page load
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
    })
}

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
        tableHTML += "<td>" + movieData[i].users + "</td>";
        tableHTML += "</tr>";
    }

    $('#movieTable').html(tableHTML);
}