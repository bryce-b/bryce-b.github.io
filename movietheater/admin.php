<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta charset="utf-8"/>
    <meta name="author" content="Bryce B"/>
    <meta name="description" content="Register to see a movie here at the Movie Theatre Theater!"/>
    <meta name="keywords" content="Movie, Theatre, Registration, New Movies"/>

    <link rel="stylesheet" href="css/main.css" />
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/index.js"></script>

    <title>Movie Theatre App</title>
</head>
<body>
    <?php
        // create vars to use when we connect to the server.
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "customer";
    
        $connection = new mysqli($servername, $username, $password, $dbname);
        if ($connection->connect_error) {
            die("Connection failed: " . $connection->connect_error);
        }
        
        if (isset($_POST["name"])) {
            $name = htmlspecialchars($_POST["name"]);
            $sql = "SELECT * FROM orders WHERE name ='$name'";            
            foreach ($connection->query($sql) as $row) {
                echo $row["name"] . "is watching: " . $row["movie"] . " at: ". $row["seat"] . "<br /><br />";
            }
        }
     ?>
    <form method="post" action="">
        <label for="name">Please enter a name: </label>
        <input type="text" name="name" id="name" placeholder="Howard Ratner" required/><br />
    
    <button type="submit">Find name.</button>
    </form>
    
</body>
</html>
