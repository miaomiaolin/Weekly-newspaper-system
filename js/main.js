// function openIn(){
// 	var mask=document.getElementById('mask');
// 	var loadPage=document.getElementById('loadPage');
// 	mask.style.display="block";
// 	loadPage.style.display="block";
// 	mask.onclick=function(){
// 		mask.style.display="none";
// 		loadPage.style.display="none";
// 	}
// }
layui.use('element', function(){
var element = layui.element;

});
function navBlock(){
var weekNav=document.getElementById('weekNav');
weekNav.style.display="inline-block";
}
layui.use('laypage', function(){
var laypage = layui.laypage;

//执行一个laypage实例
laypage.render({
elem: 'test1' //注意，这里的 test1 是 ID，不用加 # 号
,count: 50 //数据总数，从服务端得到
});
});