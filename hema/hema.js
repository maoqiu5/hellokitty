

auto.waitFor()
//点击购物车
const clickSettle_Cart = () => {
	click(1034.3,3068.0)
}
// 点击按钮
const clickSettle = () => {
	id('button_cart_charge').findOne().click()
}

const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}
const musicNotify = () => {
	const m = '/storage/emulated/0/Music/TheFatRat - Origin.mp3'
	media.playMusic(m)
}

const prepare = () => {
	clickSettle_Cart()
	sleep(800)
	id("checkbox_charge").findOne().click()
	sleep(100)
	id("checkbox_charge").findOne().click()
	sleep(100)
	id("checkbox_charge").findOne().click()
	sleep(100)
	start()
}

const start = () => {
	
	// 是否有结算按钮
	if (hasText("结算")) {
		// 点击结算
		clickSettle()
		sleep(1000)
		
		start()
	} else if (hasText('非常抱歉，当前商品运力不足(063)') || hasText('很抱歉，下单失败')) {
		// 返回上一页
		back()
		sleep(700)
		start()
	} else if (hasText('提交订单')) {
		className("android.widget.TextView").text("提交订单").findOne().parent().click()
		musicNotify()
		sleep(700)
		start()
	} else {
		toast('停止活动了')
		musicNotify()
	}
}
//点击购物车
const appName = "盒马";
launchApp(appName);
sleep(1000)
//musicNotify()
prepare()


// const appName = "盒马";
// launchApp(appName);
// sleep(3000);
// media.pauseMusic()
// sleep(7000)
// media.stopMusic()