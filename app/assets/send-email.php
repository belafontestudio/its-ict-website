<?php

require_once("sendgrid-php/sendgrid-php.php");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form fields and remove whitespace.
  $name = strip_tags(trim($_POST["name"]));
  $azienda = strip_tags(trim($_POST["azineda"]));
  $emailaddress = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

  $sendgrid = new SendGrid('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', array('raise_exceptions' => false));

  $email = new SendGrid\Email();
  $email
      ->addTo('piermaria@belafonte.co')
      ->setFrom($emailaddress." - ".$azienda)
      ->setSubject('Subject goes here')
      ->setText('Hello World!');
  $res = $sendgrid->send($email);

  echo $res->getCode();
} else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>
