function insert(num) {
	document.form.textview.value = document.form.textview.value + num;
	document.form.finput.value = document.form.finput.value + num;
	var exp = 	document.form.textview.value;
	if(exp) {
		document.form.textview.value = eval(exp);
	};
}

function clean() {
	document.form.textview.value = "";
	document.form.finput.value = "";
}

function back() {
	var exp = 	document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length-1);
}

function equal() {
	document.form.finput.value = "";
	var exp = 	document.form.textview.value;
	if(exp) {
		document.form.textview.value = eval(exp);
	}
}