var BGPage = chrome.extension.getBackgroundPage();
var status = BGPage.getSwt();
if(status == 0) {
	document.getElementById("plstatus").innerHTML='<label class="red">Disabled</label>';
}
else {
	document.getElementById("plstatus").innerHTML='<label class="green">Enabled</label>';
}