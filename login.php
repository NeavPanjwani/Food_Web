<?php
// Connect to the database
$conn = mysqli_connect("localhost", "root", "", "dhiraj");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle login
if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM login WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        echo "Login successful!";
    } else {
        echo "Invalid email or password.";
    }
}

// Handle registration
if (isset($_POST['register'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $role = $_POST['role'];

    $sql = "INSERT INTO login (name, email, password, role) VALUES ('$name', '$email', '$password', '$role')";
    if (mysqli_query($conn, $sql)) {
        echo "Registration successful!";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
