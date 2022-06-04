window.onload=function(){
    let username=document.querySelector('#username');
    let password=document.querySelector('#password');
    let submit=document.querySelector('#passWordSubmit');
    let json={
        'username':'',
        'password':''
    }
    let xmlhttp=new XMLHttpRequest();
    console.log("xx");
    submit.addEventListener('click',function(){
        console.log('xixi');
        xmlhttp.open("post",Window.myConfig.ip+"/api/login",false);
        if(username.focus){
            json.username="233";
            json.username=username.value;
        }
        if(password.focus){
            json.password=password.value;
        }
        console.log(json);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        console.log("状态码: "+xmlhttp.readyState);
        xmlhttp.send(JSON.stringify(json));
        let test=JSON.parse(xmlhttp.responseText);
        console.log(test);
        alert("服务器端状态码: "+test.message);
        if(test.state==0){
            location.href="http://www.baidu.com";
        }
    });
}
