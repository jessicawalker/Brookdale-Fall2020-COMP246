//Create a jQuery listener that waits for the user to enter submit

$('#data-submit').click(function() {
    var bookTitle = $('#bookTitle').val();
    var author = $('#author').val();
    var publisher = $('#publisher').val();
    var yearPublished = $('#yearPublished').val();
    var isbn = $('#isbn').val();

    var d = new Date();
    var ID = "lib" + d.getTime();

    var jsonString = JSON.stringify({ ID: ID, bookTitle: bookTitle, author: author, publisher: publisher, yearPublished: yearPublished, isbn: isbn });

    $.ajax({
        url: libraryURL + "/write-record",
        type: "post",
        data: { data: jsonString }, // var data = req.body.data;
        success: function(response) {
            alert(response);
        },
        error: function(err) {
            alert(err);
        }
    });
});