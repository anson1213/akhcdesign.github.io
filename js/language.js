function changlang(tolang) {
	var loc = document.location.href;
	if ( loc.lastIndexOf("/en/") != -1 ){
		tloc =  loc.replace("/en/", "/"+tolang+"/");
	}
	if ( loc.lastIndexOf("/zh-cn/") != -1 ){
		tloc =  loc.replace("/zh-cn/", "/"+tolang+"/");
	}
	window.location = tloc;

	window.addEventListener('beforeunload', function (e) {
		sessionStorage.tabsopened--;
		$('body').hide();
		$(window).scrollTop(0);
	});
	 
	$(document).ready(function() {
	   if (sessionStorage.tabsopened == 'NaN' || sessionStorage.tabsopened == null || sessionStorage.tabsopened == 'undefined'){
			sessionStorage.setItem('tabsopened', 0);
	   }
	   sessionStorage.tabsopened++;
	   
	   if (sessionStorage.tabsopened >= 2){
			AOS.refresh();
		}
	});
	
}