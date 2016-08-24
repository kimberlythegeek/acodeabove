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

});

