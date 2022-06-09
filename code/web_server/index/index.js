const ip=Window.myConfig.ip;
window.onload=function(e){
    e=event;
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

        console.log(document.querySelector(".main>table"));
        if(document.querySelector(".main>table")==null){
            let json={
                "姓名":"",
                "性别":"",
                "年龄":"",
                "地址":"",
                "电话":""
            }
            let form=document.createElement("form");
            

            let username=document.createElement("input",);
            username.setAttribute("type","text");
            username.setAttribute("placeholder","请输入新的姓名");
            username.setAttribute("id","username");
            form.appendChild(username);

            let sex=document.createElement("input",);
            sex.setAttribute("type","text");
            sex.setAttribute("placeholder","请输入性别");
            form.appendChild(sex);

            let age=document.createElement("input",);
            age.setAttribute("type","text");
            age.setAttribute("placeholder","请输入年龄");
            form.appendChild(age);

            let address=document.createElement("input",);
            address.setAttribute("type","text");
            address.setAttribute("placeholder","请输入地址");
            form.appendChild(address);

            let tellphone=document.createElement("input",);
            tellphone.setAttribute("type","text");
            tellphone.setAttribute("placeholder","请输入电话");
            form.appendChild(tellphone);

            let submit=document.createElement("input",);
            submit.setAttribute("type","submit");
            form.appendChild(submit);

            submit.addEventListener("click",function(){
                //按下提交按钮，检查内部的值封装并提交
                if(username.focus){
                    json.姓名=username.value;
                }
                if(sex.focus){
                    json.性别=sex.value;
                }
                if(tellphone.focus){
                    json.电话=tellphone.value;
                }
                if(address.focus){
                    json.地址=address.value;
                }
                if(age.focus){
                    json.年龄=age.value;
                }
                xmlhttp.open("post",ip+"/master/add",false);
                xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xmlhttp.setRequestHeader("Authorization",getCookie("Authorization"));
                alert(JSON.stringify(json));
                xmlhttp.send(JSON.stringify(json));
            })
            showAddBtn(form);
        }

        xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
                let res_json=JSON.parse(xmlhttp.responseText);
                let table="<table>";
                table+="<tr><td>车主编号</td><td>姓名</td><td>性别</td><td>年龄</td><td>地址</td><td>联系电话</td><td>操作</td></tr>"
                for(let i=0;i<res_json.length;i++){
                    table+="<tr>"
                    +"<td>"+res_json[i].车主编号+"</td>"
                    +"<td>"+res_json[i].姓名+"</td>"
                    +"<td>"+res_json[i].性别+"</td>"
                    +"<td>"+res_json[i].年龄+"</td>"
                    +"<td>"+res_json[i].地址+"</td>"
                    +"<td>"+res_json[i].联系电话+"</td>"
                    +"<td>"+"<button class=\"cancel\">删除</button>"+"</td>"
                    +"</tr>"
                }
                table+="</table>";
			    document.getElementById("main").innerHTML=table;
            }
        }
        xmlhttp.open("get",ip+"/master/look",false);
        xmlhttp.setRequestHeader("Authorization",getCookie("Authorization"));
        xmlhttp.send();
        cancelUser();
    }
    function cancelUser(){
        let button=document.querySelectorAll(".cancel");
        let tr=document.querySelectorAll("tr");
        for(let i=0;i<button.length;i++){
            button[i].addEventListener('click',function(){
                xmlhttp.open('post',ip+'/master/delete',false);
                xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xmlhttp.setRequestHeader("Authorization",getCookie("Authorization"));
                let json={
                    车主编号: tr[i+1].cells[0].innerHTML
                };
                xmlhttp.send(JSON.stringify(json));
                if(xmlhttp.responseText.state="0"){
                    alert("删除成功");
                }
                //重新加载表格
                showUser(e);
            })
        }
    }
    function showCars(e){
        e.preventDefault();
        xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
            let res_json=JSON.parse(xmlhttp.responseText);
            let table="<table>";
            table+="<tr><td>车辆编号</td><td>车牌号</td><td>车辆颜色</td><td>车辆品牌</td><td>车主编号</td><td>操作</td></tr>"
            for(let i=0;i<res_json.length;i++){
                table+="<tr>"
                +"<td>"+res_json[i].车辆编号+"</td>"
                +"<td>"+res_json[i].车牌号+"</td>"
                +"<td>"+res_json[i].车身颜色+"</td>"
                +"<td>"+res_json[i].车辆品牌+"</td>"
                +"<td>"+res_json[i].车主编号+"</td>"
                +"<td>"+"<button class=\"cancel\">删除</button>"+"</td>"
                +"</tr>"
            }
            table+="</table>";
			document.getElementById("main").innerHTML=table;
		}
    }
        xmlhttp.open("GET",ip+"/cars/look",false);
        xmlhttp.setRequestHeader("Authorization",getCookie("Authorization"));
        xmlhttp.send();
        cancelCars();
    }
    function cancelCars(){
        let button=document.querySelectorAll(".cancel");
        let tr=document.querySelectorAll("tr");
        for(let i=0;i<button.length;i++){
            button[i].addEventListener('click',function(){
                xmlhttp.open('post',ip+'/cars/delete',false);
                xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xmlhttp.setRequestHeader("Authorization",getCookie("Authorization"));
                let json={
                    车辆编号: tr[i+1].cells[0].innerHTML
                };
                xmlhttp.send(JSON.stringify(json));
                if(xmlhttp.responseText.state="0"){
                    alert("删除成功");
                }
                //刷新表格
                showCars(e);
            })
        }
    }
    function showParking(e){
        e.preventDefault();
        xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                let res_json=JSON.parse(xmlhttp.responseText);
                let table="<table>";
                table+="<tr><td>车位编号</td><td>收费标准</td><td>占用情况</td><td>车主编号</td><td>操作</td></tr>"
                for(let i=0;i<res_json.length;i++){
                    table+="<tr>"
                    +"<td>"+res_json[i].车位编号+"</td>"
                    +"<td>"+res_json[i].收费标准+"</td>"
                    +"<td>"+res_json[i].占用情况+"</td>"
                    +"<td>"+res_json[i].车主编号+"</td>"
                    +"<td>"+"<button class=\"cancel\">删除</button>"+"</td>"
                    +"</tr>"
                }
                table+="</table>";
                document.getElementById("main").innerHTML=table;
            }
        }
            xmlhttp.open("GET",ip+"/PSpaces/look",false);
            xmlhttp.setRequestHeader("Authorization",getCookie("Authorization"));
            xmlhttp.send();
            cancelParking();
    }
    function cancelParking(){
        let button=document.querySelectorAll(".cancel");
        let tr=document.querySelectorAll("tr");
        for(let i=0;i<button.length;i++){
            button[i].addEventListener('click',function(){
                xmlhttp.open('post',ip+'/PSpaces/delete',false);
                xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xmlhttp.setRequestHeader("Authorization",getCookie("Authorization"));
                let json={
                    车位编号: tr[i+1].cells[0].innerHTML
                };
                xmlhttp.send(JSON.stringify(json));
                if(xmlhttp.responseText.state="0"){
                    alert("删除成功");
                }
                //刷新表格
                showParking(e);
            })
        }
    }
    function showRecord(e){
        e.preventDefault();
        xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                let res_json=JSON.parse(xmlhttp.responseText);
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
            xmlhttp.open("GET",ip+"/log/look",false);
            xmlhttp.setRequestHeader("Authorization",getCookie("Authorization"));
            xmlhttp.send();
    }
    function helloUser(){
        let user=document.querySelector(".user");
        user.innerHTML+=getCookie("userName");
    }
    function showAddBtn(inner){
        let addbtn=document.querySelector("#add");
        addbtn.className+="addBtnShow";
        addbtn.addEventListener("click",function(e){
            e.preventDefault();
            let div=document.createElement("div");
            document.querySelector(".content").appendChild(div);
            div.className="insertPageBg";

            let div_inner=document.createElement("div");
            div_inner.className="insertPage";
            div_inner.appendChild(inner);
            document.querySelector(".content").appendChild(div_inner);

            let div_cancel=document.createElement("div");
            div_cancel.className="insertPageCancel"
            div_inner.appendChild(div_cancel);

            div_cancel.innerHTML="<img src=../public/img/cancel.png\></img>"
            div_cancel.addEventListener("click",function(){
                div.remove();
                div_inner.remove();
                div_cancel.remove();
            })
        })
    }
    helloUser();
}