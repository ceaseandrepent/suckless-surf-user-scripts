document.addEventListener('DOMContentLoaded', function () {
	if (location.href.split('/')[2] == 'www.vedomosti.ru') {
		var content = document.getElementById('idmasha').innerHTML;
		document.getElementsByTagName('html')[0].innerHTML = '';
		document.getElementsByTagName('html')[0].innerHTML = content;
	}
}, false);
