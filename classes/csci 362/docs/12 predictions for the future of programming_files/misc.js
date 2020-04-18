/**
 * @author jparshley
 */
  jQuery().ready(function(){    
    jQuery('input.textField').focus(function(){
      this.value = '';
    });
    $("input.fake-pass").focus(function() {
      $('#edit-pass').show().focus();
      $('.fake-pass').hide();
    });
	$("#recaptcha_area").prepend('<label for="recaptcha" class="recaptcha_title_label">Security Code:</label>');
    $("div.recaptcha_input_area").prepend('<label for="recaptcha" class="recaptcha_input_label">Enter the two words above, separated by a space:</label>');
  	//centers the push down ad
	$("div[id*='ebBannerDiv'] > div").css("text-align","center");
  });
