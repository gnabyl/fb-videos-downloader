chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id, {file: "group.js"});
	if (tab.url.includes("videos")) {
		chrome.tabs.executeScript(tab.id, {file: "videoplayer.js"});
	}
});
