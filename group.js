console.log("hello");

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

function addDownloadButtonToPost(post, video_link) {
	if (post.getElementsByClassName("download_button").length == 0) {
		let separator = document.createElement("span");
		separator.className = "jpp8pzdo";
		separator.innerHTML = `<span>
									<span class="pmk7jnqg g0aa4cga q45zohi1"></span>
									<span aria-hidden="true"> · </span>
								</span>`;
		let download_button = document.createElement("span");
		download_button.innerHTML = `<a href="` + video_link + `" target="_blank">Download</a>`;
		download_button.className = "download_button";
		position.appendChild(separator);
		position.appendChild(download_button);
	}
}

function facebookLoadCallback(event) {
	if (window.location.toString().includes("videos")) {
		return;
	}
	console.log("Start scouting link");
	// .children[1].getElementsByClassName("oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi knj5qynh m9osqain hzawbc8m")[0]
	video_link_elements = document.getElementsByClassName("oajrlxb2 g5ia77u1 gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 q9uorilb p7hjln8o qjjbsfad fv0vnmcu w0hvl6rk ggphbty4 jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l i2p6rm4e jnigpg78 byekypgc");
	Array.from(video_link_elements).forEach((item) => {	  
		if (item.href == undefined) {
			return;
		}
		parent = recursivelyGetParent(item, 15);
		position = parent.children[1].getElementsByClassName("oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi knj5qynh m9osqain hzawbc8m")[0];
		if (position != undefined) {
			addDownloadButtonToPost(parent, item.toString());
		}
	});
	// Add download button
	// video_link_elements.each((id, item) => {
	// 	console.log(item.toString());
	// 	parent = recursivelyGetParent(item, 15);
	// 	console.log(parent);
	// 	// console.log($(parent).find("#download_button"));
	// 	// if ($(parent).find(".download_button").length == 0) {
	// 	// 	$(parent).find(".nqmvxvec.j83agx80.jnigpg78.cxgpxx05.dflh9lhu.sj5x9vvc.scb9dxdr.odw8uiq3").append(download_button);
	// 	// }
	// });
};
setInterval(facebookLoadCallback, 5000);