// Retrieve the library data and populate on page load

$.ajax({
    url: libraryURL + "/read-records",
    type: "get",
    success: function(response) {
        var data = jQuery.parseJSON(response);
        createLibraryTable(data);
    },
    error: function(err) {
        alert(err);
    }
});

$(".delete_button").click(function() {
    var itemID = this.getAttribute("data-id");

    $.ajax({
        url: libraryURL + "/delete-record",
        type: "delete",
        data: itemID,
        success: function(response) {
            var data = jQuery.parseJSON(response);
            createLibraryTable(data);
        },
        error: function(err) {
            alert(err);
        }
    });
});

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
        tableHTML += "<td class=\"delete_button\"> <button data-id=\"" + libraryData[i].ID + "\">DELETE</button></td>";
        tableHTML += "</tr>";
    }

    $('#libraryTable').html(tableHTML);
}

/*
sortin tableLayout: 
click sort thing, send a app.get
obj.sort()
*/