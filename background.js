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
function sleep(milliseconds) {
	var start = new Date().getTime();
	for ( var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
}
/*
chrome.tabs.onCreated.addListener(function(tab) {
	if (switcher == 1) {
		sleep(2000);
		if (!biliStatus) {
			$.get("http://userscripts.org/scripts/source/119622.user.js", null,
					null, "text").done(function(remoteCode) {
				chrome.tabs.executeScript(null, {
					code : remoteCode
				});
			});
		} else {
			chrome.tabs.executeScript(null, {
				file : "119622.user.js"
			});
		}

		//alert("enabled!");
	}

});*/
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	
	if (tab.url.substr(0,4) == "http"){
		if (switcher == 1) {
			if (changeInfo.status == "complete") {
				
				//sleep(2000);
				//alert(tab.url);
				if (!biliStatus) {
					$.get("http://userscripts.org/scripts/source/119622.user.js",
							null, null, "text").done(function(remoteCode) {
						chrome.tabs.executeScript(null, {
							code : remoteCode,
							runAt : "document_end"
						});
					});
				} else {
					chrome.tabs.executeScript(null, {
						file : "119622.user.js",
						runAt: "document_end"
					});
				}
	
				//alert("enabled!");
			}
		}
		else {
			//alert("disabled!");
		}
	}
});

chrome.extension.onRequest.addListener(function(msg, sender, sendResponse) {
	if (msg.text == "disable") {
		switcher = 0;
		biliStatus = false;
		///alert("change to 0");
	} else if (msg.text == "enable") {
		switcher = 1;
		//alert("change to 1");
	} else if (msg.text == "biliEnable") {
		biliStatus = true;
	} else if (msg.text == "biliDisable") {
		biliStatus = false;
	} else if (msg.text == "instruction") {
		alert("在后台打开的新页面可能无法替换成功\n如失效请手动刷新该页面");
	} else if (msg.text == "bwarning") {
		alert("letv/iqiyi-bilibili替换后为无广告无弹幕模式\n详细解释请参见插件主页");
	} else {
		alert("ERROR!");
	}
	sendResponse({});
});
