# Chris Cummings

I'm a software engineer living in Columbia, SC. I spend most of my time working with Python. Ping me at <span id="contact"></span>

![Gentleman Aventurer](assets/images/chris_cummings.jpg)

<script>
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
	myStuff.generateEmailLink($('#contact'));
});
</script>



