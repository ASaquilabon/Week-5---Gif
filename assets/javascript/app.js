$(document).ready(function () {
    //array of artists 
    var topic = ["Kendrick Lamar", "J.cole", "Lauryn Hill", "Erykah Badu", "50 Cent"];

    function displayInfo() {
        var artist = $(this).attr("name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            name + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({
            url: queryURL,
            method: "Get"
        }).done(function (response) {
            $("#artist").empty();
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var artistDiv = $("<div class='userArtist'>");
                var rating = results[i].rating;
                var picRate = $("<p>").text("Rating: " + rating);
                var urlPause = results[i].images.fixed_height_still.url;
                var urlUnpause = results[i].images.fixed_height.url;
                var gif = $("<img>").addClass("gif").attr("src", urlPause).attr("data-still", urlPause).attr("data-animate", urlUnpause).attr
                    artistDiv.append(gif);
                artistDiv.append(picRate);
                $("#artist").append(artistDiv);              
    }
    $(".gif").on("click", function() {
        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

    });
});

}
function renderButtons() {
            $("#artistButtons").empty();
            for (var i = 0; i < topic.length; i++) {
    
                var artistRender = $("<button>");
     
                artistRender.addClass("artist");
                artistRender.attr("artist-name", topics[i]);
                artistRender.text(topics[i]);
                $("#artistButtons").append(artistRender);
            }
        }
        $("#addArtist").on("click", function(event) {
            event.preventDefault();
            var sport = $("#artist-input").val().trim();
    

            topics.push(sport);
                $("#artist-input").val(" ");
            renderButtons();
        });
    
        $(document).on("click", ".artist", displayInfo);
    
        
        renderButtons();
    });