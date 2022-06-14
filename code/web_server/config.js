Window.myConfig={
    // ip:"http://192.168.1.100"
    ip: "http://127.0.0.1"
    // ip:"http://192.168.1.119"
	// ip:"http://192.168.129.25"
}
//获取cookie
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}