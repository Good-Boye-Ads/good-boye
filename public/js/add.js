$(document).ready(function () {
 console.log('attaching the submit butotn event');
    // SUBMIT FORM
    $("#submit").on("click", function (event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        console.log('getting lcicked');
        ajaxPost();
    });
    function ajaxPost() {
        // PREPARE FORM DATA
        var newPet = {
            petType: $("#petType").val().trim(),
            petName: $("#petName").val().trim(),
            petAge: $("#petAge").val().trim(),
            petAddres: $("#petAddres").val().trim(),
            petImage: $("#petImage").val().trim(),
            //created_at: moment().format("YYYY-MM-DD HH:mm:ss")
        }
        // DO POST
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: window.location + "api/pets/save",
            data:newPet,
            dataType: 'json',
            success: function (newPet) {
                $("#postResultDiv").html("<p>" +
                    "Post Successfully! <br>" +
                    "--> " + newPet.petType + " " + newPet.petName + " " + newPet.petAge + " " + newPet.petAddres + " " + newPet.petImage +", createdAt: " + newPet.createdAt + "</p>");
            },
            error: function (e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }
        });
        // Reset FormData after Posting
        resetData();
    }
    function resetData() {
        $("#petType").val("");
        $("#petName").val("");
        $("#petAge").val("");
        $("#petAddres").val("");
        $("#petImage").val("");
    }
});