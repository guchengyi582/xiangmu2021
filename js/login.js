let cookie = {
    // 写入/修改cookie
    set(key, value, day) {
        let d = new Date();
        d.setDate(d.getDate() + day)
        document.cookie = key + "=" + value + ";expires=" + d;
    },
    // 读取cookie
    get(key) {
        let arr = document.cookie.split("; ")
        var result = {}
        arr.forEach(item => {
            let key = item.split("=")[0];
            let value = item.split("=")[1];
            result[key] = value;
        })
        return key ? result[key] : result;
    }
}

$("#login").click(function(){
    
    let http = new XMLHttpRequest()
    http.open("get",`http://192.168.31.28:8080/login?username=${$("#username").val()}&password=${$("#password").val()}`)
    http.send()
    http.onreadystatechange = function(){
        if(http.readyState === 4){
            if(http.responseText === "success"){
                alert("登录成功")
                location.href="http://192.168.31.28/xishanjv/home.html"
            }
            else{
                alert("用户名或密码错误")
            }
        }
    }
    if($("#ipt")[0].checked){
        cookie.set("username",$("#username").val(),30)
        cookie.set("password",$("#password").val(),30)
    }

})

if(cookie.get("username") && cookie.get("password")){
    $("#username").val(cookie.get("username")) 
    $("#password").val(cookie.get("password")) 
}
// console.log(cookie.get("username"))