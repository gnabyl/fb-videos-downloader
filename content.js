$(document).ready(() => {

	function isHDAvailable(videoJson) {
		return (videoJson['playable_url_quality_hd'] != null);
	}

	function unescapeUrl(url) {
		return url.replace(/\//, "/").replace(/&amp;/g, "&");
	}

	function getJSONString(source, startMark) {
		let start = source.indexOf(startMark);
		if (start == -1) {
			return "";
		}

		start += startMark.length;


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

		return source.substring(start, end + 1);
	}

	const generatedSource = new XMLSerializer().serializeToString(document);
	const jsonString = getJSONString(generatedSource, "\"data\":{\"video\":");

	const videoJSONObject = JSON.parse(jsonString);	

	let urlMark = "playable_url";

	if (isHDAvailable(videoJSONObject)) {
		urlMark = "playable_url_quality_hd";
	}

	const downloadLink = unescapeUrl(videoJSONObject[urlMark].toString());

	const downloadButton = `<div id="download_link" class="oajrlxb2 tdjehn4e qu0x051f esr5mh6w 
															e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 
															j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 
															oygrvhab hcukyx3x jb3vyjys rz4wbd8a 
															qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr 
															f1sip0of lzcic4wl l9j0dhe7 abiwlrkh 
															p8dawk7l bp9cbjyn s45kfl79 emlxlaya 
															bkmhp75w spb7xbtv rt8b4zig n8ej3o3l 
															agehan2d sk4xxmp2 taijpn5t tv7at329 
															thwo4zme">
								<a href="` + downloadLink + `">
									<img src="` + chrome.runtime.getURL("download_icon.png") + `"/>
								</a>
							</div>`;
	if ($("#download_link")) {
		$("#download_link").remove();
	}
	$(".bkfpd7mw.buofh1pr.j83agx80").append(downloadButton);

	
});