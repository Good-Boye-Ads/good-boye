$(document).ready(function () {
 console.log('attaching submit event');
    // SUBMIT FORM
    $("#submit-form").on("click", function (event) {
        // prevent form from submitting via the browser.
        event.preventDefault();
        console.log('getting clicked');
        ajaxPost();
    });
    function ajaxPost() {
        // PREPARE FORM DATA
        var newPet = {
            petName: $("#petName").val().trim(),
            petType: $("#petType").val().trim(),
            petAge: $("#petAge").val().trim(),
            petLoc: $("#petLoc").val().trim(),
            petUrl: $("#petUrl").val().trim(),
            petImage: $("#petImage").val().trim()
        }
        // DO POST
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/api/pets",
            data: JSON.stringify(newPet),
            dataType: 'json',
            success: function (newPet) {
                console.log('ajax data:', newPet);
            },
            error: function (e) {
                console.log("ajax error: ", e);
            }
        });
        // Reset FormData after Posting
        // resetData();
    }
    function resetData() {
        $("#petName").val("");
        $("#petType").val("");
        $("#petAge").val("");
        $("#petLoc").val("");
        $("#petUrl").val("");
        $("#petImage").val("");
    }
});