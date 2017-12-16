$(()=>{
	//查找id为txtName的文本框
	var $txtName=$("#txtName");
	var $txtPwd=$("#txtPwd");
	var $pwdReport=$("#passwordRepeat");
	//为txtName添加失去焦点事件
	$txtName.blur(e=>{
		let uname=e.target.value;
		if(uname) checkName(uname);//当前触发事件的文本框
	});
	function checkName(txt){
		if(txt)
		$.ajax({
				type:"get",
				url:"http://127.0.0.1:8080/user/checkname",
				data:"uname="+txt.trim(),
				xhrFields:{withCredentials:true}
			}).then(data=>{
				console.log(data.msg);	//控制台输出验证结果
		})
	}
	//查找id为btnReg的按钮,绑定单击事件
	$("#btnReg").click(()=>{
		let uname=$txtName.val();
		let upwd=$txtPwd.val();
		let upwdR=$pwdReport.val();
		// console.log("ajax:"+upwd);
		if(uname&&upwd&&upwd===upwdR)
			$.ajax({
				type:"get",
				url:"http://127.0.0.1:8080/user/register",
				data:"uname="+uname.trim()+"&upwd="+upwd.trim(),
				xhrFields:{withCredentials:true}
			}).then(data=>{console.log("1:"+data);
				if(data.code<0) alert(data.msg);
				else if(data.code>0){
                    alert(data.msg+" !前往登錄==>");
					location="login.html";	//注册成功，跳转回首页
				}
			})
	})
});