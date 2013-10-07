$(function() {

	$("#plenable").click(function() {
		chrome.extension.sendRequest({
			text : "1"
		});
		document.getElementById("plstatus").innerHTML='<label class="green">Enabled</label>';
		// alert("anle 1");
	})

	$("#pldisable").click(function() {
		chrome.extension.sendRequest({
			text : "0"
		});
		document.getElementById("plstatus").innerHTML='<label class="red">Disabled</label>';
		// alert("anle 0");
	})
})

