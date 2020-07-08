$("#mount_0_0").ready(() => {
	function facebookLoadCallback(event) {
		console.log("Start scouting link");
		video_link_elements = $("a.oajrlxb2.g5ia77u1.gcieejh5.bn081pho.humdl8nn.izx4hr6d.rq0escxv.nhd2j8a9.q9uorilb.p7hjln8o.qjjbsfad.fv0vnmcu.w0hvl6rk.ggphbty4.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.l9j0dhe7.abiwlrkh.p8dawk7l.i2p6rm4e.jnigpg78.byekypgc");
		video_link_elements.each((id, item) => {
			console.log(item.toString());
		});
	};
	document.addEventListener('DOMNodeInserted', facebookLoadCallback);
});