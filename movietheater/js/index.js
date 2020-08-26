$(document).ready(function() {
    const $display = $("#display"),
          $size = $("#size");
    
    let tickets = 1;
    
    $(document).on("input", $display, function() {
        tickets = $size.val();
        $display.html(tickets);
    });
    
    $('form').on('submit', function (e) {
        const $name = $("#name");
        
        // Create our regex pattern (2 words under 25 length).
        const pattern = /^(?!.{25,})(\w+\s+\w+?)$/;
        if (!$("#name").val().match(pattern)) {
            // Stop the form from submitting so we can
            // ask them to fill it out correctly.
            e.preventDefault();
            // Bring their name into focus so they can quickly type.
            $("#name").focus();
        }
    });
    
    let movie = "", synop = "", times = "";
    
    $("input[type='radio']").click(function() {
        movie = $("input[type='radio']:checked").val();
        console.log(movie);
        synop = "";
        times = "";
        
        switch (movie) {
            case "fantasy": 
                synop = "If you are looking for a good movie the whole family can enjoy then fantasy is for you. Watch as a family of superheroes tries to hide their powers from citizens while they battle the biggest threat imaginable. A Fantasy movie will provide the family with a fun entertaining experience for everyone.";
                times = "11AM-12:30PM, 1PM-2:30PM, 3PM-4:30PM";
                break;
            case "horror": 
                synop = "Don’t go down that dark hallway alone Sarah. That’s what we have grown accustomed to from horror films these days. What if I told you that the horror selection at MTT will leave you shaking from the sudden jumpscares and wondering if there is someone watching you from that dark spot in the woods across the street.";
                times = "11AM-12:30PM, 1PM-2:30PM, 3PM-4:30PM";
                break;
            case "scifi": 
                synop = "Are you ready to journey into the unknown worlds of sci-fi? Watch as people fight with laser swords or lazer beams and fight across galaxies with spaceships. Visit alien planets far from our own with different life and dominant species that roam the galaxy.";
                times = "12PM-1:45PM, 2:15PM-3PM, 4:30PM-5:15PM";
                break;
            case "western": 
                synop = "If you want to take a trip back to the late 19th Century to the time of cowboys and outlaws this is the genre for you. Watch as bounty hunters track down their quarries or maybe a gang of outlaws attempting to escape the law is more your style. Either way, Westerns provide a thrilling adventure back to the old untamed west."
                times = "11AM-12:30PM, 1PM-2:30PM, 3PM-4:30PM";
                break;
            default: 
                synop = "";
                times = "";
                break;
        }
        
        $("#test").html("<div class='grid'><img id='cur-img' style='grid-column: 1;' src='media/" + movie + ".png' /> <p style='grid-column: 3;'>" + synop + "</p> <p style='grid-row 2; grid-column: 2;'>" + times + "</p>");
        
		document.getElementById("cur-img").onload = function(e) {
            let x = $(".grid").position();
			$("#test").append("<button id='close' style='position: fixed; top: " + x.top + "px; left: " + x.left + "px; background-color: #ffffff;'>x</button>");
			$("#close").click(function() {
				$("#test").html("");
                $()
			});
		}
	});
    
    $display.html(tickets);
});


