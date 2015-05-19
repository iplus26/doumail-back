// ==UserScript==
// @name         Doumail Back & Remove Douban App Ads
// @author       Ivan Jiang(iplus26) & Joanna Wu(wileam)
// @include        *.douban.com/*
// @grant        none
// ==/UserScript==
//
// 用于 Firefox 的 Greasemonkey 或者 Chrome 的 Tampermonkey

// 标题
document.title = document.title.replace( /私信/g, "豆邮");

if (location.hostname.indexOf("site") != -1) {
    // site.douban.com
    var p2 = document.querySelector('a[href^="http://www.douban.com/doumail"]');
    p2.innerHTML = p2.innerHTML.replace(/私信/g, "豆邮");

} else {
    // www.douban.com
    
    // 导航栏
    var p1 = document.querySelector("#top-nav-doumail-link"),
        doubanAppAd = document.querySelector('.top-nav-doubanapp');
    p1.textContent = p1.textContent.replace(/私信/g, "豆邮");
    doubanAppAd.remove();

    if(location.pathname.indexOf("people")  != -1) {
        // 发私信
        var p5 = document.querySelector(".a-btn.mr5");
        p5.innerHTML = p5.innerHTML.replace(/私信/g, "豆邮");
    }

    if(location.pathname.indexOf("doumail") != -1){
        // 豆邮页面
        var h1 = document.querySelector("#content h1");
        
        if (location.pathname == "/doumail/") {
            document.title = "我的豆邮";
            h1.innerHTML   = "我的豆邮";
        } else {
            h1.innerHTML   = h1.innerHTML.replace(/私信/g, "豆邮");
        }
    
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
}