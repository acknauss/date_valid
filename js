function valid_date(which, type) {
	if(type == 'birthdate') {
		var dtRegex = new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-][12][90][0-9][0-9]$/);
	} else {
		var dtRegex = new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-](?:\d{2}|[12][90][0-9][0-9]$)\b/);
	}
	var this_input =$(which).attr("id");
	var	this_date = $('#'+this_input).val();
	var is_valid = dtRegex.test(this_date);
	if(is_valid) {
		$(which).removeClass('error').addClass('good-to-go');
	} else {
		$(which).addClass('error').removeClass('good-to-go');
	}
}
