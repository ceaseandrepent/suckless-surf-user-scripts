CUSTOM_CSS = "<style type='text/css'>* { background-color: #073642 !important; color: #839496 !important; } body { width: 75%; margin-left: auto; margin-right: auto; }</style>";

document.addEventListener('DOMContentLoaded', function () {
	if (location.href.split('/')[2] == 'www.vedomosti.ru') {
		var content = document.getElementById('idmasha').innerHTML;
		document.getElementsByTagName('html')[0].innerHTML = '';
		document.getElementsByTagName('html')[0].innerHTML += content;
		document.getElementsByTagName('html')[0].innerHTML += CUSTOM_CSS;
	}
}, false);

document.addEventListener('DOMContentLoaded', function () {
	if (location.href.split('/')[2] == 'www.securitylab.ru') {
		var content = $('div.main_content').html();
		document.getElementsByTagName('body')[0].innerHTML = '';
		document.getElementsByTagName('body')[0].innerHTML += content;
		document.getElementsByTagName('body')[0].innerHTML += CUSTOM_CSS;
	}
}, false);

document.addEventListener('DOMContentLoaded', function () {
	if (location.href.split('/')[2] == 'habrahabr.ru') {
		var content = $('div.content_left').html();
		var body = document.getElementsByTagName('body')[0];
		body.innerHTML = '';
		body.innerHTML += content;
		body.innerHTML += CUSTOM_CSS;
	}
}, false);
