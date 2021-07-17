
var myStuff = {
	// Generates an email link to hopefully stymie spam scrappers.
	generateEmailLink: function(element){
		var address = ['net', '.', 'chriscummings', '@', 'chris'].reverse().join('');

		var mailLink = $('<a/>')
			.attr({href: 'mailto:' + address})
			.text(address);

		element.append(mailLink);
	}
};

$(document).ready(function(){
	if($(".email_address").length){
		myStuff.generateEmailLink($('.email_address'));
	}
});
