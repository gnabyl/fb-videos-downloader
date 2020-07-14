function unescapeUrl(url) {
	return url.replace(new RegExp("\\\\/|/\\\\", "g"), "/").replace(new RegExp("&amp;", "g"), "&");
}

function escapeUrl(url) {
	return url.replace(/\//g, "/").replace(/&amp;/g, "&");	
}

function getJSONString(source, seed, startMark) {
	// console.log("Searching " + startMark + " with seed " + seed);
	let start = source.indexOf(seed);

	// console.log(seed);

	while (start >= 0) {
		// console.log(start, source.substring(start, start + startMark.length));
		if (source.substring(start, start + startMark.length) == startMark) {
			break;
		}
		start --;
	}

	if (start == -1) {
		return "";
	}

	start += startMark.length - 1;


	let count = 0, end = 0;

	for (end = start; end < source.length; end ++) {
		if (source[end] == '{') {
			count ++;
		}
		if (source[end] == '}') {
			count --;
			if (count === 0) {
				break;
			}
		}
	}

	// console.log(source.substring(start, end + 1));

	return source.substring(start, end + 1);
}

function jsonSearchElement(jsonObj, element) {
    for (var k in jsonObj) {
    	if ((jsonObj[k] != null) && (k == element)) {
    		return jsonObj[k];
    	}
        if ((jsonObj[k] !== null) && (typeof(jsonObj[k]) == "object")) {
            let temp = jsonSearchElement(jsonObj[k], element);
            if (temp != null) {
            	return temp;
            }
        }
    }
    return null;
}

function createDownloadButton() {
	// console.log("started creating download button");

	// cleanup
	oldButton = document.getElementById("download_link");
	if (oldButton != null) {
		oldButton.parentNode.removeChild(oldButton);
	}

	// console.log(generatedSource);

	try {
		let generatedSource = unescapeUrl(new XMLSerializer().serializeToString(document));
		let videoUrl = window.location.href;
		if (!videoUrl.endsWith("/")) {
			videoUrl += "/";
		}
		let jsonString_1 = getJSONString(generatedSource, "\"url\":\"" + videoUrl + "\"", "{");
		let jsonString_2 = getJSONString(generatedSource, "\"permalink_url\":\"" + videoUrl +"\"", "{");
		let jsonString = (jsonString_1.length > jsonString_2.length) ? jsonString_1 : jsonString_2;
		// console.log(jsonString);
		let videoJSONObject = JSON.parse(jsonString);
		let urlMark = "playable_url_quality_hd";
		let jsonElement = jsonSearchElement(videoJSONObject, urlMark);

		if (jsonElement == null) {
			urlMark = "playable_url";
			jsonElement = jsonSearchElement(videoJSONObject, urlMark);
		}

		let downloadLink = unescapeUrl(jsonElement.toString());

		// console.log(downloadLink);

		let downloadButton = document.createElement("div");
		downloadButton.id = "download_link";
		downloadButton.className = "oajrlxb2 tdjehn4e qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn s45kfl79 emlxlaya bkmhp75w spb7xbtv rt8b4zig n8ej3o3l agehan2d sk4xxmp2 taijpn5t tv7at329 thwo4zme";
		downloadButton.innerHTML = `<a href="` + downloadLink + `" target="_blank">
										<img src="` + chrome.runtime.getURL("download_icon.png") + `"/>
									</a>`;

		let buttonContainer = document.getElementsByClassName("bkfpd7mw buofh1pr j83agx80");


		let findingContainer = setInterval(() => {
			buttonContainer = document.getElementsByClassName("bkfpd7mw buofh1pr j83agx80");
			if (buttonContainer != undefined) {
				buttonContainer = buttonContainer[buttonContainer.length - 1];
				buttonContainer.appendChild(downloadButton);
				clearInterval(findingContainer);			
			}
		}, 1000);

	} catch (err) {
		console.log(err);
		return false;
	}

	// console.log(videoJSONObject);

	
	return true;
}

if (createDownloadButton() == false) {
	alert("Failed while trying to get link!");
}