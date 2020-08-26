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

    $name = $_POST["name"];
    $movie = $_POST["movie"];
    $cost = $_POST["cost"];
    $seat = $_POST["seat"];
    
    $query = "INSERT INTO orders(name, movie, cost, seat)"
        . "VALUES('$name', '$movie', $cost, '$seat')";

    if ($connection->query($query) === FALSE) {
        echo "Error: " . $query . "<br>" . $connection->error;
    }

    echo var_dump($_POST);;
?>