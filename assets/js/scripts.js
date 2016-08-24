$(document).ready(function(){

  $("input, textarea").on("keyup", function(){

    if($(this).val() != '') {
      $('.' + this.id).addClass('has-success');
      $('.' + this.id).addClass('glyphicon-ok');

      $('.' + this.id).removeClass('has-error');
      $('.' + this.id).removeClass('glyphicon-remove');
    } else {
      $('.' + this.id).addClass('has-error');
      $('.' + this.id).addClass('glyphicon-remove');

      $('.' + this.id).removeClass('has-success');
      $('.' + this.id).removeClass('glyphicon-ok');
    }

    if ($("textarea").val() != "" && $("#form-name").val() != "" && $("#form-phone").val() != "" && $("#form-email").val() != "") {
      $("#submit-form").removeAttr("disabled");
    }
  });

  // $('#submit-form').on('click', function(){
  //   var name = $('#form-name').val().replace(/<|>/g, ""), // prevent xss
  //   phone = $('#form-phone').val().replace(/<|>/g, ""),
  //   email = $('#form-email').val().replace(/<|>/g, ""),
  //   msg = $('#form-msg').val().replace(/<|>/g, "");
  //
  //   $.ajax({
  //       type: "POST",
  //       url: "http://localhost/acodeabove/sendmail.php",
  //       data: "email=" + email + "phone=" + phone + "&name=" + name + "&msg=" + msg + "&g-recaptcha-response=" + grecaptcha.getResponse()
  //   });
  //
  // });
  //   console.log(grecaptcha.getResponse());
});

