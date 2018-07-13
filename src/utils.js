import commonmark from 'commonmark';

export default {

	formatDateTime(value) {
		if (!value) {
			return '';
		}
		let date = new Date(value);
		return date.toISOString().replace('T', ' ').replace('Z', '').substring(0,19);
	},

	markup(text) {
		var reader = new commonmark.Parser();
		var writer = new commonmark.HtmlRenderer();
		var parsed = reader.parse(text);
		return writer.render(parsed);
	},

	toggleBox(event) {
		var container = event.currentTarget.parentNode;
		var target = container.getElementsByClassName('toggleTarget')[0];
		var indicator = container.getElementsByClassName('toggleSource')[0];
		if(target.style.display == "block") {
			target.style.display = "none";
			indicator.setAttribute('class', indicator.getAttribute("class").replace('minus', 'plus'));
		}
		else {
			target.style.display = "block";
			indicator.setAttribute('class', indicator.getAttribute("class").replace('plus', 'minus'));
		}
	},

	uuid() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}

};