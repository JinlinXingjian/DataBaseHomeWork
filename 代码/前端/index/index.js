const ip=Window.myConfig.ip;

window.onload=function(){
    let xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
            let res_json=JSON.parse(xmlhttp.responseText);
            console.log(res_json);
            let table="<table>";
            table+="<tr><td>车辆编号</td><td>车牌号</td><td>车辆颜色</td><td>车辆品牌</td><td>车主编号</td></tr>"
            for(let i=0;i<res_json.length;i++){
                table+="<tr>"
                +"<td>"+res_json[i].车辆编号+"</td>"
                +"<td>"+res_json[i].车牌号+"</td>"
                +"<td>"+res_json[i].车身颜色+"</td>"
                +"<td>"+res_json[i].车辆品牌+"</td>"
                +"<td>"+res_json[i].车主编号+"</td>"
                +"</tr>"
            }
            table+="</table>";
			document.getElementById("main").innerHTML=table;
		}
    }
    xmlhttp.open("GET",ip+"/cars/look",true);
	xmlhttp.send();
}