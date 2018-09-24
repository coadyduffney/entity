<html>
<body>
    <head>
        <title>Entity - Zul'jin</title>
        <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon">
    </head>
</body>
</html>

<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
include_once('config.php');

//Load Composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings    
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    // $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.sendgrid.net';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'apikey';                 // SMTP username
    $mail->Password = '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';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to(465)

    //Recipients
    $mail->setFrom('noreply@entity-guild.online');
    $mail->addAddress('coadyduffney@gmail.com');     // Add a recipient
    // $mail->addCC('Dawgs9604@gmail.com');
    // $mail->addCC('coadyduffney@gmail.com');
    // $mail->addCC('darkafflictionlorekeeper@hotmail.com');
    // $mail->addCC('zilite.zilite@gmail.com');
    // $mail->addCC('sindorein.thalassian@gmail.com');
    // $mail->addCC('bloodhawkbomber@gmail.com');

    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    $char_name = $_POST['charName']; 
    $class = $_POST['class']; 
    $main_spec = $_POST['main-spec']; 
    $off_spec = $_POST['off-spec']; 
    $armory = $_POST['armory']; 
    $prev_guild = $_POST['prev-guild']; 
    $prev_exp = $_POST['prev-exp']; 
    $logs = $_POST['logs']; 
    $about_yourself = $_POST['about-yourself']; 
    $btag = $_POST['btag']; 
    $name = $_POST['name']; 
    $referal = $_POST['referal']; 
    $captcha_response = $_POST['g-recaptcha-response'];

    // echo $captcha_response;

    if ($captcha_response == '') {
        echo "<script>
                alert('Captcha must be checked before submitting your application.');
                window.location.href='index.html#apply';
            </script>";
    } else {
        $body = '<p><strong>Character Name: </strong> ' . $char_name . '</p>
        <p><strong>Class: </strong> ' . $class . '</p>
        <p><strong>Main-Spec: </strong> ' . $main_spec . '</p>
        <p><strong>Off-Spec: </strong> ' . $off_spec . '</p>
        <p><strong>Armory: </strong> ' . $armory . '</p>
        <p><strong>Previous Guild: </strong> ' . $prev_guild . '</p>
        <p><strong>Previous Experience: </strong> ' . $prev_exp . '</p>
        <p><strong>Logs: </strong> ' . $logs . '</p>
        <p><strong>Name: </strong> ' . $name . '</p>
        <p><strong>About Me: </strong> ' . $about_yourself . '</p>
        <p><strong>Btag: </strong> ' . $btag . '</p>
        <p><strong>How did you hear about us? </strong> ' . $referal . '</p>';
        

        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Guild Application - ' . $char_name;
        $mail->Body    = $body;
        $mail->AltBody = strip_tags($body);

        $mail->send();
        // echo 'Message has been sent';
        echo "<script>
            alert('Application Submitted. Thank you for your interest in our guild.');
            window.location.href='index.html#apply';
            </script>";
    }

} catch (Exception $e) {
    // echo "<script>
    //         alert('Error submitting application. Mailer Error: ');
    //         window.location.href='index.html#apply';
    //       </script>";
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}