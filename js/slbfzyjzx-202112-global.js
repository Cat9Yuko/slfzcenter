var time = "";
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var week = date.getDay();
var weekarry = ["日", "一", "二", "三", "四", "五", "六"]
time = year + "年" + month + "月" + day + "日" + "&nbsp;星期" + weekarry[week];
$("#time").html(time);