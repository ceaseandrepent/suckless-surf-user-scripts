document.addEventListener('DOMContentLoaded', function () {
	if (location.href.split('/')[2] == 'www.vedomosti.ru') {
		var content = document.getElementById('idmasha').innerHTML;
		document.getElementsByTagName('html')[0].innerHTML = '';
		document.getElementsByTagName('html')[0].innerHTML = content;
	}
}, false);

document.addEventListener('DOMContentLoaded', function () {
	if (location.href.split('/')[2] == 'www.securitylab.ru') {
		var content = $('div.main_content').html();
		document.getElementsByTagName('body')[0].innerHTML = '';
		document.getElementsByTagName('body')[0].innerHTML = content;
	}
}, false);
