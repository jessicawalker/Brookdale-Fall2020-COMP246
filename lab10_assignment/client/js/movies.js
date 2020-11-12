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
        })
    })
}