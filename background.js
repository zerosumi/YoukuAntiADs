var switcher = 1;
var biliStatus = false;
getSwt = function() {
	  return switcher;
}
getBili = function() {
	  return biliStatus;
}
/*
chrome.browserAction.onClicked.addListener(function(tab) {
	
});
*/
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(switcher == 1) {
		if(changeInfo.status == "loading"){
			if(!biliStatus) {
				$.get("http://userscripts.org/scripts/source/119622.user.js", null, null, "text")
					.done(function(remoteCode){
						chrome.tabs.executeScript(null, { code: remoteCode });		        
					})
			}
			else {
				chrome.tabs.executeScript(null, {
					file : "119622.user.js"
				});
			}
			
			//alert("enabled!");
		}
	}
	else {
		//alert("disabled!");
	}
	
});

chrome.extension.onRequest.addListener(function(msg, sender, sendResponse) {
	if(msg.text == "disable") {
		switcher = 0;
		biliStatus = false;
		///alert("change to 0");
	}
	else if(msg.text == "enable") {
		switcher = 1;
		//alert("change to 1");
	}
	else if(msg.text == "biliEnable") {
		biliStatus = true;
	}
	else if(msg.text == "biliDisable") {
		biliStatus = false;
	}
	else{
		alert("ERROR!");
	}
	sendResponse({});
});

