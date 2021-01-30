let password1 = $("#password")
		let password2 = $("#password1")
		$("#login").click(function(){
			if(password1.val()===password2.val()){
				let http = new XMLHttpRequest()
				http.open("get",`http://192.168.31.28:8080/addUser?username=${$("#username").val()}&password=${$("#password").val()}`)
				http.send()
				http.onreadystatechange = function(){
				
					if(http.readyState === 4){
						if(http.responseText === "success"){
							alert("注册新用户成功，点击去登录");
							location.href = "http://192.168.31.28/xishanjv/login.html";
						}
						else{
							alert("注册失败")
						}
					}
					
				}
			}
			else{
				alert("密码不一致请重新输入！")
				password1.val("")
				password2.val("")
			}
		})
