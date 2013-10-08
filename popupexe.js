var BGPage = chrome.extension.getBackgroundPage();
var status = BGPage.getSwt();
var biliStatus = BGPage.getBili();
if(status == 0) {
	document.getElementById("pldisable").setAttribute("class","disabled");
	//document.getElementById("plstatus").innerHTML='<label class="red">关闭</label>';
}
else {
	document.getElementById("plenable").setAttribute("class","enabled");
	//document.getElementById("plstatus").innerHTML='<label class="green">开启</label>';
}
if(biliStatus == false) {
	document.getElementById("bili").checked = false;
}
else {
	document.getElementById("bili").checked = true;
}