//The code that is fired upon page load
//to check your plugin js is working uncomment the next line.
//$("body").append('Test');
var re = /.*\.42\.fr/;
if (re.test(window.location.hostname))
	$('body').css('transform', 'rotate(0)');
