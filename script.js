function inc(num) {
	document.getElementById('out').value = document.getElementById('out').value + num;
}

function res(){
	var out = document.getElementById('out').value;
	document.getElementById('out').value = eval(out);
}
function cl(){
	document.getElementById('out').value = "";
}
function back(){
	var out = document.getElementById('out').value;
	document.getElementById('out').value = out.substring(0,out.length - 1);
}