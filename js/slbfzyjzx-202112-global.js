var time = "";
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var week = date.getDay();
var weekarry = ["日", "一", "二", "三", "四", "五", "六"]
time = year + "年" + month + "月" + day + "日" + "&nbsp;星期" + weekarry[week];
$("#time").html(time);
$(function() {
    var settings = {
        placement: 'bottom',
        trigger: 'hover',
        width: 130,
        muti: false,
        closeable: false,
        style: 'restyle',
        padding: false,
        arrow: false,
        offsetTop: 20
    }
    var popzhcon1 = $('#pop-zh1').html();
    var popzhcon2 = $('#pop-zh2').html();
    var popzhcon3 = $('#pop-zh3').html();
    popzhset1 = {
        content: popzhcon1
    }
    popzhset2 = {
        content: popzhcon2
    }
    popzhset3 = {
        content: popzhcon3
    }

    function initPopover() {
        $('div.pop-zh1').webuiPopover('destroy').webuiPopover($.extend({}, settings, popzhset1));
        $('div.pop-zh2').webuiPopover('destroy').webuiPopover($.extend({}, settings, popzhset2));
        $('div.pop-zh3').webuiPopover('destroy').webuiPopover($.extend({}, settings, popzhset3));
    }
    initPopover();
});