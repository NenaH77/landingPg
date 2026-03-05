<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "your@email.com";  // 🔥 CHANGE THIS
    $subject = "New Infection Control Inquiry";

    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    $headers = "From: $email";

    mail($to, $subject, $body, $headers);

    // PROFESSIONAL REDIRECT
    header("Location: index.php?success=true");
    exit();
}
