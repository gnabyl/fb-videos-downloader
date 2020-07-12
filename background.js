$("#mount_0_0").ready(() => {

	download_button = `<div class="download_button">
							<img src="` + chrome.runtime.getURL("/download_icon.png") + `" alt="" height="20" width="20">
						</div>`;

	function recursivelyGetParent(item, level) {
		if (level === 0) {
			return item;
		} else {
			return recursivelyGetParent(item.parentNode, level - 1);
		}
	}

	function facebookLoadCallback(event) {
		// console.log("Start scouting link");
		video_link_elements = $("a.oajrlxb2.g5ia77u1.gcieejh5.bn081pho.humdl8nn.izx4hr6d.rq0escxv.nhd2j8a9.q9uorilb.p7hjln8o.qjjbsfad.fv0vnmcu.w0hvl6rk.ggphbty4.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.i2p6rm4e.jnigpg78.byekypgc");

		video_links = video_link_elements.map((id, item) => {
			return item.toString().replace("www", "m");
		});

		// Add download button
		video_link_elements.each((id, item) => {
			parent = recursivelyGetParent(item, 15);
			// console.log($(parent).find("#download_button"));
			if ($(parent).find(".download_button").length == 0) {
				$(parent).find(".nqmvxvec.j83agx80.jnigpg78.cxgpxx05.dflh9lhu.sj5x9vvc.scb9dxdr.odw8uiq3").append(download_button);
				$(parent).find(".download_button")[0].onclick = (e) => {
					console.log(e);
				};
			} else {				
			}
		});
	};

	function httpGetAsync(url, callback) {
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            callback(xmlHttp.responseText);
	    }
	    xmlHttp.open("GET", url, true);
	    xmlHttp.send(null);
	}

	// setInterval(facebookLoadCallback, 5000);

	document.addEventListener('DOMNodeInserted', facebookLoadCallback);
});