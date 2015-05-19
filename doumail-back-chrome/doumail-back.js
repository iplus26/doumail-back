console.log("还我豆邮!  -- Ivan");

// 标题
document.title = document.title.replace(/私信/g, "我的豆邮");

// 导航栏
var p1 = document.querySelector("#top-nav-doumail-link");
p1.textContent = p1.textContent.replace(/私信/g, "豆邮");

if(location.pathname.indexOf("people")  != -1) {
	// 发私信
	var p5 = document.querySelector(".user-opt");
	p5.innerHTML = p5.innerHTML.replace(/私信/g, "豆邮");
}


if(location.pathname.indexOf("doumail") != -1){
	// 豆邮页面
	document.querySelector("#content h1").innerHTML = "我的豆邮";

	// 右侧边栏
	var p3 = document.querySelector(".aside");
	p3.innerHTML = p3.innerHTML.replace(/私信/g, "豆邮");

	// tabs
	var p4 = document.querySelector(".doumail-toolbar");
	if (p4 != null) {
		p4.innerHTML = p4.innerHTML.replace(/私信/g, "豆邮");
	}
		
	// 「回应」按钮旁边的广告
	document.querySelector(".item-submit").innerHTML = '<span class="bn-flat"><input type="submit" name="m_reply" value="回应"></span>';
}