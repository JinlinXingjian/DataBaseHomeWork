window.onload=function(){
    let xmlhttp;
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("main").innerHTML=xmlhttp.responseText;
		}
    }
    xmlhttp.open("GET","127.0.0.1/database",true);
	xmlhttp.send();
}