const ip=Window.myConfig.ip;
window.onload=function(){
    let xmlhttp=new XMLHttpRequest();
    let user=document.querySelector('#user');
    let cars=document.querySelector('#cars');
    let parking=document.querySelector('#parking');
    let record=document.querySelector('#record');
    user.addEventListener('click',showUser);
    cars.addEventListener('click',showCars);
    parking.addEventListener('click',showParking);
    record.addEventListener('click',showRecord);
    function showUser(e){
        e.preventDefault();
        xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
                let res_json=JSON.parse(xmlhttp.responseText);
                console.log(res_json);
                let table="<table>";
                table+="<tr><td>车主编号</td><td>姓名</td><td>性别</td><td>年龄</td><td>地址</td><td>联系电话</td></tr>"
                for(let i=0;i<res_json.length;i++){
                    table+="<tr>"
                    +"<td>"+res_json[i].车主编号+"</td>"
                    +"<td>"+res_json[i].姓名+"</td>"
                    +"<td>"+res_json[i].性别+"</td>"
                    +"<td>"+res_json[i].年龄+"</td>"
                    +"<td>"+res_json[i].地址+"</td>"
                    +"<td>"+res_json[i].联系电话+"</td>"
                    +"</tr>"
                }
                table+="</table>";
			    document.getElementById("main").innerHTML=table;
            }
        }
        xmlhttp.open("get",ip+"/master/look",false);
        xmlhttp.setRequestHeader("Authorization",getCookie("Authorization"));
        xmlhttp.send();
        return false;
    }
    function showCars(e){
        e.preventDefault();
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
        xmlhttp.setRequestHeader("Authorization",getCookie("Authorization"));
        console.log(document.cookie);
        xmlhttp.send();
    }
    function showParking(e){
        e.preventDefault();
        xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                let res_json=JSON.parse(xmlhttp.responseText);
                console.log(res_json);
                let table="<table>";
                table+="<tr><td>车位编号</td><td>收费标准</td><td>占用情况</td><td>车主编号</td></tr>"
                for(let i=0;i<res_json.length;i++){
                    table+="<tr>"
                    +"<td>"+res_json[i].车位编号+"</td>"
                    +"<td>"+res_json[i].收费标准+"</td>"
                    +"<td>"+res_json[i].占用情况+"</td>"
                    +"<td>"+res_json[i].车主编号+"</td>"
                    +"</tr>"
                }
                table+="</table>";
                document.getElementById("main").innerHTML=table;
            }
        }
            xmlhttp.open("GET",ip+"/PSpaces/look",true);
            xmlhttp.setRequestHeader("Authorization",getCookie("Authorization"));
            console.log(document.cookie);
            xmlhttp.send();
    }
    function showRecord(e){
        e.preventDefault();
        xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                let res_json=JSON.parse(xmlhttp.responseText);
                console.log(res_json);
                let table="<table>";
                table+="<tr><td>记录编号</td><td>车位编号</td><td>车辆编号</td><td>停车时间</td><td>离开时间</td><td>产生费用</td><td>缴费情况</td></tr>"
                for(let i=0;i<res_json.length;i++){
                    table+="<tr>"
                    +"<td>"+res_json[i].记录编号+"</td>"
                    +"<td>"+res_json[i].车位编号+"</td>"
                    +"<td>"+res_json[i].车辆编号+"</td>"
                    +"<td>"+res_json[i].停车时间+"</td>"
                    +"<td>"+res_json[i].离开时间+"</td>"
                    +"<td>"+res_json[i].产生费用+"</td>"
                    +"<td>"+res_json[i].缴费情况+"</td>"
                    +"</tr>"
                }
                table+="</table>";
                document.getElementById("main").innerHTML=table;
            }
        }
            xmlhttp.open("GET",ip+"/log/look",true);
            xmlhttp.setRequestHeader("Authorization",getCookie("Authorization"));
            console.log(document.cookie);
            xmlhttp.send();
    }
}