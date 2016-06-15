<?php

require_once("sendgrid-php/sendgrid-php.php");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form fields and remove whitespace.
  $name = strip_tags(trim($_POST["Nome"]));
  $azienda = strip_tags(trim($_POST["Azienda"]));
  $emailaddress = filter_var(trim($_POST["Email"]), FILTER_SANITIZE_EMAIL);

  $check1 = strip_tags(trim($_POST["Check1"]));
  $check2 = strip_tags(trim($_POST["Check2"]));
  $check3 = strip_tags(trim($_POST["Check3"]));

  $message = $emailaddress." - ".$azienda;

  if($check1=="on" || $check2=="on" || $check3=="on"){
    $message .= " - interessato a\r\n";
  }
  if($check1=="on"){
    $check1 = "Mobile App Design\r\n";
    $message .= $check1." ";
  }
  if($check2=="on"){
    $check2 = "Coding\r\n";
    $message .= $check2." ";
  }
  if($check3=="on"){
    $check3 = "Videomaking\r\n";
    $message .= $check3." ";
  }




  $sendgrid = new SendGrid('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', array('raise_exceptions' => false));

  $email = new SendGrid\Email();
  $email
      ->addTo('piermaria@belafonte.co')
      ->setFrom($emailaddress)
      ->setSubject($emailaddress." - ".$azienda)
      ->setText($message);
  $res = $sendgrid->send($email);


} else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>
