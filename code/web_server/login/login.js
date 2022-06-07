window.onload=function(){
    let username=document.querySelector('#username');
    let password=document.querySelector('#password');
    let submit=document.querySelector('#passWordSubmit');
    //建立json对象，返回给后端
    let json={
        'username':'',
        'password':''
    }
    //新建xmlhttp对象
    let xmlhttp=new XMLHttpRequest();
    submit.addEventListener('click',function(){
        xmlhttp.open("post",Window.myConfig.ip+"/api/login",false);
        //监听文本框中的内容
        if(username.focus){
            json.username=username.value;
        }
        if(password.focus){
            json.password=password.value;    
        }
        //打印要发给后端的json对象
        console.log(json);
        //设置请求头
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        //打印后端发来的状态码
        console.log("状态码: "+xmlhttp.readyState);
        //发送请求
        xmlhttp.send(JSON.stringify(json));
        //获取后端发来的响应中的内容，并将其转换为json对象
        let test=JSON.parse(xmlhttp.responseText);
        console.log(test);
        console.log(document.cookie);

        document.cookie="Authorization="+test.token+";path=/";

        console.log(document.cookie);
        //如果后端发来的状态码为0，则跳转到首页
        if(test.state==0){
            location.href="../index/index.html";
        }
    });
}
