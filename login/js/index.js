$(() => {
	// 登录注册界面切换
	$('.enroll-a').click(() => {
		$('.login').hide();
		$('.enroll').show();
	})
	$('.login-b').click(() => {handoff()})
	const handoff = () => {
		$('.login').show();
		$('.enroll').hide();
	}
 
	// 判断登录账号与密码是否正确
	$('.login-a').click(() => {
		const name = $('#name').val();
		const pwd = $('#pwd').val();
		let account = localStorage.getItem('account');
		let password = localStorage.getItem('password');
		if (!name || !pwd) {
			alert('账号或密码不能为空！！！');
		} else if (name == account && pwd == password || name == 666 && pwd == 888) { // 666与888是默认登录账号与密码（可修改或删除）
			alert('登录成功！');
			localStorage.setItem('captcha', 1);
			$('.login').hide();
			// indexbox.html 是登录成功后显示的页面路径（可修改）
			$('body').append('<iframe src="MG_box.html"></iframe>');
		} else {
			alert('账号或密码错误！！！');
		}
	})
 
	// 注册并本地储存账号与密码数据
	$('.enroll-b').click(() => {
		const name1 = $('#name1').val();
		const pwd1 = $('#pwd1').val();
		if (!name1 || !pwd1) {
			alert('账号与密码不能为空！！！');
		} else {
			localStorage.setItem('account', name1);
			localStorage.setItem('password', pwd1);
			alert('注册成功！');
			handoff();
			$('#name').val(name1);
			$('#pwd').val(pwd1);
		}
	})
	
	const detect = () => {
		var check = document.getElementsByTagName('input')[0];
		console.log(check.checked);
		var panduan=false;
 		if(check){
			panduan=true;
		}
		else{
			panduan=false;
		}
		if (localStorage.getItem('captcha').length <= 5 && panduan==true) {
			const recording = localStorage.getItem('captcha') + 1;
			localStorage.setItem('captcha', recording);
			$('.login').hide();
			alert('您登陆过此网站，五次之内自动登录')
			$('body').append('<iframe src="MG_box.html"></iframe>');
		}
	}
	detect();
})
