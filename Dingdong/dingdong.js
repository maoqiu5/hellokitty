

//点击购物车
const clickSettle_Cart = () => {
	id('rl_car_layout').findOne().click()
}
// 点击结算
const clickSettle = () => {
	id('btn_submit').findOne().click()
}

//点击支付
const clickPay = () => {
	id("tv_label").className("android.widget.TextView").text("微信支付").findOne().parent().parent().click()
	sleep(200)
	id('tv_submit').findOne().click()
}
//勾选购物车全选
const clickCheckBox =() => {
	id("vg_car").findOne().children().forEach(child => {
		var target = child.findOne(id("ll_left_state"));
		target.click();
		});
}



//选择时间并关闭
const clickSelectTime =() => {
	//click(797.4,2026.4)
	id("vp_dialog_select_time_content").findOne().children().forEach(child => {
		var target = child.findOne(id("tv_item_select_hour_title").className("android.widget.TextView").text("18:30-22:30"));
		target.click();
		})
	sleep(400)
	id("iv_dialog_select_time_close").findOne().click()
}
const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}
const musicNotify = () => {
	const m = '/storage/emulated/0/Music/TheFatRat - Origin.mp3'
	media.playMusic(m)
}
//准备工作，进入支付页面
const prepare=()=>{
	clickSettle_Cart()
	sleep(300)
	clickCheckBox()
	sleep(800)
	start()
}

//提交支付
const start = () => {
	
	clickSettle()
	sleep(300)
	clickPay()
	sleep(100)
	//选择时间
	clickSelectTime()
	// 是否时间有效
	if (hasText("今天")) {
		// 点击支付
		clickPay()
		toast('停止活动了')
		musicNotify()
		sleep(500)
	} else {
			back()
			sleep(300)
			start()
			}
}


//musicNotify()
const appName = "叮咚买菜";
launchApp(appName);
sleep(1000)
auto.waitFor()
prepare()


// const appName = "盒马";
// launchApp(appName);
// sleep(3000);
// media.pauseMusic()
// sleep(7000)
// media.stopMusic()