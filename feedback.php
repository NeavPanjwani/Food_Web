<?php
// Connect to the database
$conn = mysqli_connect("localhost", "root", "", "dhiraj");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle feedback submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $rating = intval($_POST['rating']);
    $comment = mysqli_real_escape_string($conn, $_POST['comment']);

    if (empty($rating) || empty($comment)) {
        echo "Rating and feedback are required.";
        exit();
    }

    $sql = "INSERT INTO feedback (name, email, rating, comment) VALUES ('$name', '$email', '$rating', '$comment')";
    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Feedback submitted successfully!'); window.location.href = 'feedback.html';</script>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
