var switcher = 1;
getSwt = function() {
	  return switcher;
}
/*
chrome.browserAction.onClicked.addListener(function(tab) {
	
});
*/
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(switcher == 1) {
		if(changeInfo.status == "loading"){
			$.get("http://userscripts.org/scripts/source/119622.user.js", null, null, "text")
		    	.done(function(remoteCode){
		    		chrome.tabs.executeScript(null, { code: remoteCode });		        
		    })
			/*
			chrome.tabs.executeScript(null, {
				file : "youkuadkiller.user.js"
			});
			*/
			//alert("enabled!");
		}
	}
	else {
		//alert("disabled!");
	}
	
});

chrome.extension.onRequest.addListener(function(msg, sender, sendResponse) {
	if(msg.text == "0") {
		switcher = 0;
		///alert("change to 0");
	}
	else if(msg.text == "1") {
		switcher = 1;
		//alert("change to 1");
	}
	else{
		alert("ERROR!");
	}
	sendResponse({});
});

