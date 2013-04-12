var CUSTOM_CSS = "<style type='text/css'>* { background-color: #073642 !important; color: #839496 !important; } body { width: 75%; margin-left: auto; margin-right: auto; text-align: justify; } code { text-align: left; } </style>";

document.addEventListener('DOMContentLoaded', function () {
	var urlParts = location.href.split('/');
	var body = document.getElementsByTagName('body')[0];

	if (urlParts[2] == 'www.vedomosti.ru') {
		var content = document.getElementById('idmasha').innerHTML;
		body.innerHTML = content;
		body.innerHTML += CUSTOM_CSS;

	} else if (urlParts[2] == 'www.securitylab.ru') {
		var content = $('div.main_content').html();
		body.innerHTML = content;
		body.innerHTML += CUSTOM_CSS;

	} else if (urlParts[2] == 'habrahabr.ru' && urlParts[3] == 'post') {
		var content = $('div.content_left').html();
		body.innerHTML = content;
		body.innerHTML += CUSTOM_CSS;

	} else if (urlParts[2] == 'mail.yandex.ru' && urlParts[3] == 'neo2') {
		$('div.b-banner').remove();

	} else if (urlParts[2] == 'e.mail.ru' && urlParts[3] == 'cgi-bin') {
		$('div.rb_banner').remove();

	}
}, false);
