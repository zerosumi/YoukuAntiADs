$(function() {
	$("#instruction").click(function() {
		chrome.extension.sendRequest({
			text : "instruction"
		});
		//alert("在后台打开的新页面可能无法替换成功<br>如失效请手动刷新页面");
	})
	$("#bwarning").click(function() {
		chrome.extension.sendRequest({
			text : "bwarning"
		});
		//alert("letv/iqiyi-bilibili替换后为无广告无弹幕模式<br>详细解释请参见插件主页");
	})
	$("#plenable").click(function() {
		chrome.extension.sendRequest({
			text : "enable"
		});
		//document.getElementById("plstatus").innerHTML='<label class="green">开启</label>';
		document.getElementById("plenable").setAttribute("class","enabled");
		document.getElementById("pldisable").removeAttribute("class");
		
		// alert("anle 1");
	})

	$("#pldisable").click(function() {
		chrome.extension.sendRequest({
			text : "disable"
		});
		//document.getElementById("plstatus").innerHTML='<label class="red">关闭</label>';
		document.getElementById("plenable").removeAttribute("class");
		document.getElementById("pldisable").setAttribute("class","disabled");
		// alert("anle 0");
	})
	$("#bili").change(function() {
		
		
		
		if($(this).is(":checked")) {
			chrome.extension.sendRequest({
				text : "biliEnable"
			});
		}
		else {
			chrome.extension.sendRequest({
				text : "biliDisable"
			});
		}
		//document.getElementById("bili").innerHTML='关闭乐视-Bilibili替换';
		// alert("anle 0");
	})
})

