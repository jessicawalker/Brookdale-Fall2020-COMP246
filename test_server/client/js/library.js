//Create a jQuery listener that waits for the user to enter submit

function activateSubmitButton() {
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
            url: "http://localhost:4500/write-record",
            type: "post",
            data: { data: jsonString }, // var data = req.body.data;
            success: function(response) {
                alert(response);
            },
            error: function(err) {
                alert(err);
            }
        })
    })
}

// Retrieve the library data and populate on page load
function getLibraryData() {
    $.ajax({
        url: "http://localhost:4500/read-records",
        type: "get",
        success: function(response) {
            var data = jQuery.parseJSON(response);
            createLibraryTable(data);
        },
        error: function(err) {
            alert(err);
        }
    })
}

function createLibraryTable(libraryData) {
    var tableHTML;

    for (var i = 0; i < libraryData.length; i++) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + libraryData[i].ID + "</td>";
        tableHTML += "<td>" + libraryData[i].bookTitle + "</td>";
        tableHTML += "<td>" + libraryData[i].author + "</td>";
        tableHTML += "<td>" + libraryData[i].publisher + "</td>";
        tableHTML += "<td>" + libraryData[i].yearPublished + "</td>";
        tableHTML += "<td>" + libraryData[i].isbn + "</td>";
        tableHTML += "</tr>";
    }

    $('#libraryTable').html(tableHTML);
}