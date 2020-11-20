// retrieve the movie data and populate on page load, sent by app.get("/read-records")

$.ajax({
    url: moviesURL + "/read-records",
    type: "get",
    success: function(response) {
        var data = JSON.parse(response);
        createMovieTable(data);
    },
    error: function(err) {
        alert(err);
    }
});

// inserts table row of data inside display table
function createMovieTable(movieData) {
    var tableHTML = "";

    for (var i = 0; i < movieData.length; i++) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + movieData[i].ID + "</td>";
        tableHTML += "<td>" + movieData[i].rank + "</td>";
        tableHTML += "<td>" + movieData[i].movieTitle + "</td>";
        tableHTML += "<td>" + movieData[i].year + "</td>";
        tableHTML += "<td>" + movieData[i].director + "</td>";
        tableHTML += "<td>" + movieData[i].rating + "</td>";
        tableHTML += "<td>" + movieData[i].users.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</td>";
        tableHTML += "<td class='delete_button'>" +
            "<button data-id=\"" +
            movieData[i].ID +
            "\">delete</button></td>";
        tableHTML += "</tr>";
    }

    // id of tbody in browse-movies page's display table
    $("#movieTable").html(tableHTML);

    $(".delete_button button").click(function() {
        var itemID = this.getAttribute("data-id");

        $.ajax({
            url: moviesURL + "/delete-record",
            type: "delete",
            data: { data: itemID },
            success: setInterval(function() {
                location.reload();
            }, 500),
            error: function(err) {
                alert(err);
            }
        });
    });
}