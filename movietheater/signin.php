<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
    <meta name="author" content="Bryce B" />
    <meta name="description" content="Register to see a movie here at the Movie Theatre Theater!" />
    <meta name="keywords" content="Movie, Theatre, Registration, New Movies" />

    <link rel="stylesheet" href="css/seating.css" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <title>Seat select</title>
</head>

<body>
    <header>Sandler Cinema</header>
    
    <div class="container">
        <div class="sides" style="float: left; min-height: 90vh; background-image: url(https://i.vgy.me/2LQ2b8.png); background-repeat: repeat-y; min-width: 6vw;"></div>
        <div style="float: right; min-height: 90vh; background-image: url(https://i.vgy.me/2LQ2b8.png); background-repeat: repeat-y;" class="sides"></div>
        
        
        <?php
        // create our vars for later use
        $name = htmlspecialchars($_POST["name"]);
        $size = $_POST["size"];
        $movie = $_POST["movie"];
        $refer = $_SERVER["HTTP_REFERER"];
        // check to make sure they came from index
        // this works, but since the sandbox is
        // password protected I cant test it on there.
        /*if (strcmp($refer, "http://localhost/") != 0) {
            header("Location: ..");
            exit();
        }*/
    
        // create vars to use when we connect to the server.
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "customer";
                                                      
        $connection = new mysqli($servername, $username, $password, $dbname);
        if ($connection->connect_error) {
            die("Connection failed: " . $connection->connect_error);
        }
    
        $query = "SELECT price FROM movies WHERE name = '$movie'";
        foreach ($connection->query($query) as $row) {
            $cost = $size * $row["price"];
        }
    
        $sql = "INSERT INTO customers (name, movie, size) VALUES"
            . "('$name', '$movie', '$size')";
        
        if ($connection->query($sql) === FALSE) {
            echo "Error: " . $sql . "<br>" . $connection->error;
        }
    
        echo "Welcome, $name! We appreciate that you chose Movie Theater&#59;"
            . " please select your $size seat(s)&#46; The cost is: $cost";
        
        // Fix length on post server.
        $length = strlen($movie);
        if ($length >= 15) {
            $movie = substr($movie, 0, 15 - $length);
        }
    ?>



        <button style="position: fixed; top: 10px; right: 10px;">Ok!</button>

        <div id="seats">
            <div id="A" class="flex-container">
                <div class="box open-seat" data-seat="A1"></div>
                <div class="box open-seat" data-seat="A2"></div>
                <div class="box open-seat" data-seat="A3"></div>
                <div class="box open-seat" data-seat="A4"></div>
                <div class="box open-seat" data-seat="A5"></div>
                <div class="box open-seat" data-seat="A6"></div>
                <div class="box open-seat" data-seat="A7"></div>
                <div class="box open-seat" data-seat="A8"></div>
                <div class="box open-seat" data-seat="A9"></div>
                <div class="box open-seat" data-seat="A10"></div>
                <div class="box open-seat" data-seat="A11"></div>
                <div class="box open-seat" data-seat="A12"></div>
                <div class="box open-seat" data-seat="A13"></div>
                <div class="box open-seat" data-seat="A14"></div>
                <div class="box open-seat" data-seat="A15"></div>
            </div>

            <div id="B" class="flex-container">
                <div class="box open-seat" data-seat="B2"></div>
                <div class="box open-seat" data-seat="B2"></div>
                <div class="box open-seat" data-seat="B3"></div>
                <div class="box open-seat" data-seat="B4"></div>
                <div class="box open-seat" data-seat="B5"></div>
                <div class="box open-seat" data-seat="B6"></div>
                <div class="box open-seat" data-seat="B7"></div>
                <div class="box open-seat" data-seat="B8"></div>
                <div class="box open-seat" data-seat="B9"></div>
                <div class="box open-seat" data-seat="B10"></div>
                <div class="box open-seat" data-seat="B11"></div>
                <div class="box open-seat" data-seat="B12"></div>
                <div class="box open-seat" data-seat="B13"></div>
                <div class="box open-seat" data-seat="B14"></div>
                <div class="box open-seat" data-seat="B15"></div>
            </div>

            <div id="C" class="flex-container">
                <div class="box open-seat" data-seat="C2"></div>
                <div class="box open-seat" data-seat="C2"></div>
                <div class="box open-seat" data-seat="C3"></div>
                <div class="box open-seat" data-seat="C4"></div>
                <div class="box open-seat" data-seat="C5"></div>
                <div class="box open-seat" data-seat="C6"></div>
                <div class="box open-seat" data-seat="C7"></div>
                <div class="box open-seat" data-seat="C8"></div>
                <div class="box open-seat" data-seat="C9"></div>
                <div class="box open-seat" data-seat="C10"></div>
                <div class="box open-seat" data-seat="C11"></div>
                <div class="box open-seat" data-seat="C12"></div>
                <div class="box open-seat" data-seat="C13"></div>
                <div class="box open-seat" data-seat="C14"></div>
                <div class="box open-seat" data-seat="C15"></div>
            </div>

            <div id="D" class="flex-container">
                <div class="box open-seat" data-seat="D2"></div>
                <div class="box open-seat" data-seat="D2"></div>
                <div class="box open-seat" data-seat="D3"></div>
                <div class="box open-seat" data-seat="D4"></div>
                <div class="box open-seat" data-seat="D5"></div>
                <div class="box open-seat" data-seat="D6"></div>
                <div class="box open-seat" data-seat="D7"></div>
                <div class="box open-seat" data-seat="D8"></div>
                <div class="box open-seat" data-seat="D9"></div>
                <div class="box open-seat" data-seat="D10"></div>
                <div class="box open-seat" data-seat="D11"></div>
                <div class="box open-seat" data-seat="D12"></div>
                <div class="box open-seat" data-seat="D13"></div>
                <div class="box open-seat" data-seat="D14"></div>
                <div class="box open-seat" data-seat="D15"></div>
            </div>

            <div id="E" class="flex-container">
                <div class="box open-seat" data-seat="E2"></div>
                <div class="box open-seat" data-seat="E2"></div>
                <div class="box open-seat" data-seat="E3"></div>
                <div class="box open-seat" data-seat="E4"></div>
                <div class="box open-seat" data-seat="E5"></div>
                <div class="box open-seat" data-seat="E6"></div>
                <div class="box open-seat" data-seat="E7"></div>
                <div class="box open-seat" data-seat="E8"></div>
                <div class="box open-seat" data-seat="E9"></div>
                <div class="box open-seat" data-seat="E10"></div>
                <div class="box open-seat" data-seat="E11"></div>
                <div class="box open-seat" data-seat="E12"></div>
                <div class="box open-seat" data-seat="E13"></div>
                <div class="box open-seat" data-seat="E14"></div>
                <div class="box open-seat" data-seat="E15"></div>
            </div>

            <div id="F" class="flex-container">
                <div class="box open-seat" data-seat="F2"></div>
                <div class="box open-seat" data-seat="F2"></div>
                <div class="box open-seat" data-seat="F3"></div>
                <div class="box open-seat" data-seat="F4"></div>
                <div class="box open-seat" data-seat="F5"></div>
                <div class="box open-seat" data-seat="F6"></div>
                <div class="box open-seat" data-seat="F7"></div>
                <div class="box open-seat" data-seat="F8"></div>
                <div class="box open-seat" data-seat="F9"></div>
                <div class="box open-seat" data-seat="F10"></div>
                <div class="box open-seat" data-seat="F11"></div>
                <div class="box open-seat" data-seat="F12"></div>
                <div class="box open-seat" data-seat="F13"></div>
                <div class="box open-seat" data-seat="F14"></div>
                <div class="box open-seat" data-seat="F15"></div>
            </div>

            <div id="G" class="flex-container">
                <div class="box open-seat" data-seat="G2"></div>
                <div class="box open-seat" data-seat="G2"></div>
                <div class="box open-seat" data-seat="G3"></div>
                <div class="box open-seat" data-seat="G4"></div>
                <div class="box open-seat" data-seat="G5"></div>
                <div class="box open-seat" data-seat="G6"></div>
                <div class="box open-seat" data-seat="G7"></div>
                <div class="box open-seat" data-seat="G8"></div>
                <div class="box open-seat" data-seat="G9"></div>
                <div class="box open-seat" data-seat="G10"></div>
                <div class="box open-seat" data-seat="G11"></div>
                <div class="box open-seat" data-seat="G12"></div>
                <div class="box open-seat" data-seat="G13"></div>
                <div class="box open-seat" data-seat="G14"></div>
                <div class="box open-seat" data-seat="G15"></div>
            </div>

            <div id="H" class="flex-container">
                <div class="box open-seat" data-seat="H2"></div>
                <div class="box open-seat" data-seat="H2"></div>
                <div class="box open-seat" data-seat="H3"></div>
                <div class="box open-seat" data-seat="H4"></div>
                <div class="box open-seat" data-seat="H5"></div>
                <div class="box open-seat" data-seat="H6"></div>
                <div class="box open-seat" data-seat="H7"></div>
                <div class="box open-seat" data-seat="H8"></div>
                <div class="box open-seat" data-seat="H9"></div>
                <div class="box open-seat" data-seat="H10"></div>
                <div class="box open-seat" data-seat="H11"></div>
                <div class="box open-seat" data-seat="H12"></div>
                <div class="box open-seat" data-seat="H13"></div>
                <div class="box open-seat" data-seat="H14"></div>
                <div class="box open-seat" data-seat="H15"></div>
            </div>

            <div id="I" class="flex-container">
                <div class="box open-seat" data-seat="I2"></div>
                <div class="box open-seat" data-seat="I2"></div>
                <div class="box open-seat" data-seat="I3"></div>
                <div class="box open-seat" data-seat="I4"></div>
                <div class="box open-seat" data-seat="I5"></div>
                <div class="box open-seat" data-seat="I6"></div>
                <div class="box open-seat" data-seat="I7"></div>
                <div class="box open-seat" data-seat="I8"></div>
                <div class="box open-seat" data-seat="I9"></div>
                <div class="box open-seat" data-seat="I10"></div>
                <div class="box open-seat" data-seat="I11"></div>
                <div class="box open-seat" data-seat="I12"></div>
                <div class="box open-seat" data-seat="I13"></div>
                <div class="box open-seat" data-seat="I14"></div>
                <div class="box open-seat" data-seat="I15"></div>
            </div>

            <div id="J" class="flex-container">
                <div class="box open-seat" data-seat="J2"></div>
                <div class="box open-seat" data-seat="J2"></div>
                <div class="box open-seat" data-seat="J3"></div>
                <div class="box open-seat" data-seat="J4"></div>
                <div class="box open-seat" data-seat="J5"></div>
                <div class="box open-seat" data-seat="J6"></div>
                <div class="box open-seat" data-seat="J7"></div>
                <div class="box open-seat" data-seat="J8"></div>
                <div class="box open-seat" data-seat="J9"></div>
                <div class="box open-seat" data-seat="J10"></div>
                <div class="box open-seat" data-seat="J11"></div>
                <div class="box open-seat" data-seat="J12"></div>
                <div class="box open-seat" data-seat="J13"></div>
                <div class="box open-seat" data-seat="J14"></div>
                <div class="box open-seat" data-seat="J15"></div>
            </div>

            <div id="K" class="flex-container">
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K3"></div>
                <div class="box open-seat" data-seat="K4"></div>
                <div class="box open-seat" data-seat="K5"></div>
                <div class="box open-seat" data-seat="K6"></div>
                <div class="box open-seat" data-seat="K7"></div>
                <div class="box open-seat" data-seat="K8"></div>
                <div class="box open-seat" data-seat="K9"></div>
                <div class="box open-seat" data-seat="K10"></div>
                <div class="box open-seat" data-seat="K11"></div>
                <div class="box open-seat" data-seat="K12"></div>
                <div class="box open-seat" data-seat="K13"></div>
                <div class="box open-seat" data-seat="K14"></div>
                <div class="box open-seat" data-seat="K15"></div>
            </div>
            
            <div id="L" class="flex-container">
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K3"></div>
                <div class="box open-seat" data-seat="K4"></div>
                <div class="box open-seat" data-seat="K5"></div>
                <div class="box open-seat" data-seat="K6"></div>
                <div class="box open-seat" data-seat="K7"></div>
                <div class="box open-seat" data-seat="K8"></div>
                <div class="box open-seat" data-seat="K9"></div>
                <div class="box open-seat" data-seat="K10"></div>
                <div class="box open-seat" data-seat="K11"></div>
                <div class="box open-seat" data-seat="K12"></div>
                <div class="box open-seat" data-seat="K13"></div>
                <div class="box open-seat" data-seat="K14"></div>
                <div class="box open-seat" data-seat="K15"></div>
            </div>
            
            <div id="M" class="flex-container">
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K3"></div>
                <div class="box open-seat" data-seat="K4"></div>
                <div class="box open-seat" data-seat="K5"></div>
                <div class="box open-seat" data-seat="K6"></div>
                <div class="box open-seat" data-seat="K7"></div>
                <div class="box open-seat" data-seat="K8"></div>
                <div class="box open-seat" data-seat="K9"></div>
                <div class="box open-seat" data-seat="K10"></div>
                <div class="box open-seat" data-seat="K11"></div>
                <div class="box open-seat" data-seat="K12"></div>
                <div class="box open-seat" data-seat="K13"></div>
                <div class="box open-seat" data-seat="K14"></div>
                <div class="box open-seat" data-seat="K15"></div>
            </div>
            
            <div id="N" class="flex-container">
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K3"></div>
                <div class="box open-seat" data-seat="K4"></div>
                <div class="box open-seat" data-seat="K5"></div>
                <div class="box open-seat" data-seat="K6"></div>
                <div class="box open-seat" data-seat="K7"></div>
                <div class="box open-seat" data-seat="K8"></div>
                <div class="box open-seat" data-seat="K9"></div>
                <div class="box open-seat" data-seat="K10"></div>
                <div class="box open-seat" data-seat="K11"></div>
                <div class="box open-seat" data-seat="K12"></div>
                <div class="box open-seat" data-seat="K13"></div>
                <div class="box open-seat" data-seat="K14"></div>
                <div class="box open-seat" data-seat="K15"></div>
            </div>
            
            <div id="O" class="flex-container">
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K3"></div>
                <div class="box open-seat" data-seat="K4"></div>
                <div class="box open-seat" data-seat="K5"></div>
                <div class="box open-seat" data-seat="K6"></div>
                <div class="box open-seat" data-seat="K7"></div>
                <div class="box open-seat" data-seat="K8"></div>
                <div class="box open-seat" data-seat="K9"></div>
                <div class="box open-seat" data-seat="K10"></div>
                <div class="box open-seat" data-seat="K11"></div>
                <div class="box open-seat" data-seat="K12"></div>
                <div class="box open-seat" data-seat="K13"></div>
                <div class="box open-seat" data-seat="K14"></div>
                <div class="box open-seat" data-seat="K15"></div>
            </div>
            
            <div id="P" class="flex-container">
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K3"></div>
                <div class="box open-seat" data-seat="K4"></div>
                <div class="box open-seat" data-seat="K5"></div>
                <div class="box open-seat" data-seat="K6"></div>
                <div class="box open-seat" data-seat="K7"></div>
                <div class="box open-seat" data-seat="K8"></div>
                <div class="box open-seat" data-seat="K9"></div>
                <div class="box open-seat" data-seat="K10"></div>
                <div class="box open-seat" data-seat="K11"></div>
                <div class="box open-seat" data-seat="K12"></div>
                <div class="box open-seat" data-seat="K13"></div>
                <div class="box open-seat" data-seat="K14"></div>
                <div class="box open-seat" data-seat="K15"></div>
            </div>
            
            <div id="Q" class="flex-container">
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K3"></div>
                <div class="box open-seat" data-seat="K4"></div>
                <div class="box open-seat" data-seat="K5"></div>
                <div class="box open-seat" data-seat="K6"></div>
                <div class="box open-seat" data-seat="K7"></div>
                <div class="box open-seat" data-seat="K8"></div>
                <div class="box open-seat" data-seat="K9"></div>
                <div class="box open-seat" data-seat="K10"></div>
                <div class="box open-seat" data-seat="K11"></div>
                <div class="box open-seat" data-seat="K12"></div>
                <div class="box open-seat" data-seat="K13"></div>
                <div class="box open-seat" data-seat="K14"></div>
                <div class="box open-seat" data-seat="K15"></div>
            </div>
            
            <div id="R" class="flex-container">
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K2"></div>
                <div class="box open-seat" data-seat="K3"></div>
                <div class="box open-seat" data-seat="K4"></div>
                <div class="box open-seat" data-seat="K5"></div>
                <div class="box open-seat" data-seat="K6"></div>
                <div class="box open-seat" data-seat="K7"></div>
                <div class="box open-seat" data-seat="K8"></div>
                <div class="box open-seat" data-seat="K9"></div>
                <div class="box open-seat" data-seat="K10"></div>
                <div class="box open-seat" data-seat="K11"></div>
                <div class="box open-seat" data-seat="K12"></div>
                <div class="box open-seat" data-seat="K13"></div>
                <div class="box open-seat" data-seat="K14"></div>
                <div class="box open-seat" data-seat="K15"></div>
            </div>
        </div>

        <script type="text/javascript">
            const max_clicks = <?php echo $size ?>;
            let clicks = 0;
            // get currently-selected and mark seats as taken
            /* Remove the listeners to avoid the events
             * being trigger more than once.
             */
            function clean_listeners() {
                $('.open-seat').off('click')
                $('.taken-seat').off('click');
            }

            /* set up the event listener for click on
             * available seats.
             */
            function open_seat() {
                $('.open-seat').on('click', function(e) {
                    if (clicks >= max_clicks) {
                        alert("You've selected too many seats!");
                        return;
                    }

                    if ($(this).hasClass("currently-selected")) {
                        return;
                    }

                    const t = this;

                    t.className = "box taken-seat currently-selected";
                    ++clicks;
                });
            }

            /* set up the event listener for click on
             * the taken seats to.
             */
            function taken_seat() {
                $(".taken-seat").on("click", function(e) {
                    const t = $(this);

                    if (!t.hasClass("currently-selected")) return;

                    t.addClass("box open-seat")
                        .removeClass("taken-seat currently-selected");
                    --clicks;
                });
            }

            // check based on classes and then run corresponding function.
            $(".flex-container").on("click", function() {
                clean_listeners();
                open_seat();
                taken_seat();
            });

            $("button").on("click", function() {
                let array = document.getElementsByClassName("currently-selected");
                let seats = ""
                for (let i = 0; i < array.length; ++i) {
                    seats += $(array[i]).data("seat") + " ";
                }

                let seat = $(".currently-selected").data("seat");
                let data = new FormData();
                data.append("name", <?php echo "\"$name\""; ?>);
                data.append("movie", <?php echo "\"$movie\""; ?>);
                data.append("cost", <?php echo $cost; ?>);
                data.append("seat", seats);


                let xmlhttp = new XMLHttpRequest();
                // Send here and render a "Your seat" picture in selected seat.
                xmlhttp.open("POST", 'calculateseating.php', true);
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 200 && this.readyState == 4) {
                        alert(this.responseText);
                    }
                }

                xmlhttp.send(data);
                alert("Thank you for choosing the movie theater.");
                window.history.back();
            });

            let seats = "";
        </script>
        <?php
            foreach ($connection->query("SELECT seat FROM orders WHERE movie='".$movie.
"'") as $row) {
        ?>
        <script>
            seats += '<?php echo $row["seat"]; ?>';
        </script>
        <?php
            }
        ?>
        <script>
            let array = seats.split(" ").forEach(elem => {
                console.log(elem);
                let rows = $("#seats").children();
                let cur_child = null,
                    children = null;
                for (let k = 0; k < rows.length; ++k) {
                    children = $(rows[k]).children();
                    for (let i = 0; i < children.length; ++i) {
                        cur_child = $(children[i]);
                        if (elem.match(cur_child.data("seat"))) {
                            cur_child.removeClass("open-seat")
                                .addClass("taken-seat");
                        }
                    }
                }
            });

            open_seat();
            taken_seat();
        </script>
    </div>
</body>

</html>