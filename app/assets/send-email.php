<?php

require_once("sendgrid-php/sendgrid-php.php");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form fields and remove whitespace.
  $name = strip_tags(trim($_POST["Nome"]));
  $azienda = strip_tags(trim($_POST["Azienda"]));
  $emailaddress = filter_var(trim($_POST["Email"]), FILTER_SANITIZE_EMAIL);

  $sendgrid = new SendGrid('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', array('raise_exceptions' => false));

  $email = new SendGrid\Email();
  $email
      ->addTo('piermaria@belafonte.co')
      ->setFrom($emailaddress)
      ->setSubject($emailaddress." - ".$azienda)
      ->setText($emailaddress." - ".$azienda." interessato a");
  $res = $sendgrid->send($email);


} else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>
