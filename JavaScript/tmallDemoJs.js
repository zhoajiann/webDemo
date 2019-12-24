function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}

function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
// 轮播图部分
var box = document.getElementsByClassName("carouselBox")[0];
var oNavlist = document.getElementById("nav").children;
var slider = document.getElementById("slider");
var left = document.getElementById("left");
var right = document.getElementById("right");
var index = 1;
var timer;
var isMoving = false;

function next(){
	if(isMoving){
		//当它正在运动时
		return;
	}
	isMoving = true;
	index++;
	navChange();
	animate(slider,{left:-795*index},function(){
		if(index === 6){
		slider.style.left = "-795px";
		index = 1;
		}
		isMoving = false
	});
}
function prev(){
	if(isMoving){
	//当它正在运动时
		return;
	}
	isMoving = true;
	index--;
	navChange();
	animate(slider,{left:-795*index},function(){
		if(index === 0){
			slider.style.left = "-4770px";
			index = 5;
		}
		isMoving = false
	});
}
var timer = setInterval(next,3000);
//鼠标滑入清除定时器，显示左右箭头
box.onmouseover = function(){
	animate(left, {opacity:50});
	animate(right, {opacity:50});
	clearInterval(timer);
}

//鼠标滑出开启定时器，不显示左右箭头
box.onmouseout = function(){
	animate(left, {opacity:0});
	animate(right, {opacity:0});
	timer = setInterval(next,3000);
}

right.onclick = next;
left.onclick = prev;

//小按钮单击事件
for(var i = 0;i<oNavlist.length;i++){
	oNavlist[i].idx = i;
	oNavlist[i].onclick = function(){
		index = this.idx + 1;
		navChange();
		animate(slider,{left:-1200*index});
	}
}

//小按钮背景色切换
function navChange(){
	for(var i = 0;i<oNavlist.length;i++){
		oNavlist[i].className = " ";
	}
	if(index === 6){
		oNavlist[0].className = "active";
	}else if(index === 0){
		oNavlist[4].className = "active";
	}
	else{
		oNavlist[index-1].className = "active";
	}

}
var searchBox = document.getElementsByClassName("searchBox")[0];
searchBox.children[1].children[0].onclick = function(){
	this.value = "";
}



// 购物车前边
var shoppingCartText = document.getElementById("shoppingCartText").children;
for(var i = 0;i<shoppingCartText.length;i++){
	shoppingCartText[i].onmouseover = function(){
		this.style.backgroundColor = "#a11";
		this.firstElementChild.style.color = "white";
	}
	shoppingCartText[i].onmouseout = function(){
		this.style.backgroundColor = "white";
		this.firstElementChild.style.color = "black";
	}
}

// 购物车变化
var shoppingCartDiv = document.getElementById("shoppingCartDiv");
shoppingCartDiv.onmouseover = function(){
	this.children[1].style.height = "100px";
	this.children[1].style.display = "block";

}
shoppingCartDiv.onmouseout = function(){
	this.style.height = "30px";
	this.children[1].style.display = "none";
}


// 左边导航的变化
var firstDiv1;
var leftBannnerBox = document.getElementsByClassName("leftBannnerBox")[0].children;
var pDivText = new Array("进口纯牛奶 进口酸奶 进口成人奶粉 进口含乳饮料 进口蜜饯果干 进口薯片膨化 进口坚果 进口糖果 进口奶锅 进口炖锅 进口蒸锅",
				"咖啡  奶茶  奶粉  芝麻糊  茶叶  麦片  红枣  梅类  葡萄干  芒果干  山楂片  无花果  牛肉 牛肉筋 调和油 葵花籽 油玉米 油豆油",
				"洗面奶  爽肤水  乳液  面霜  面膜  身体乳  隔离霜  护手霜  脱毛膏  防晒  面部护理  润唇膏 睫毛膏 洗发水 护发素  沐浴露 香皂 洗手液",
				"电饭煲  电磁炉  电热水壶  电风扇  挂烫机  剃须刀（含手动）  电吹风  电池  饮水机  收纳箱  垃圾袋 剪刀 菜刀 蔬果刀 套刀 炒锅");

for(var i =1;i<leftBannnerBox.length-1;++i){
		var node = leftBannnerBox[i];
		node.style.position = "relative";
		firstDiv1 = document.createElement("div");
		node.appendChild(firstDiv1);
		node.children[1].style.color = "#aaa";
		node.children[1].style.fontSize = "12px";
		firstDiv1.setAttribute("class","hiddenDiv");
		firstDiv1.style.display = "none";
		if(node.getAttribute("num")==1||node.getAttribute("num")==2||node.getAttribute("num")==3||node.getAttribute("num")==4){
			firstDiv1.style["top"] = "0px";
		}
		else if(node.getAttribute("num")==5){
			firstDiv1.style["top"] = "-71px";
		}
		else if(node.getAttribute("num")==6){
			firstDiv1.style["top"] = "-142px";
		}
		else if(node.getAttribute("num")==7){
			firstDiv1.style["top"] = "-213px";
		}
		for(var j=0;j<4;j++){
			var pDiv = document.createElement("p");
			firstDiv1.appendChild(pDiv);
			pDiv.setAttribute("class","pDiv");
			pDiv.style.width = "900px";
			pDiv.style.height = "70px";
			pDiv.style.color = "#aaa";
			var pText = document.createTextNode(pDivText[j]);
			pDiv.appendChild(pText);
		}
}

for(var i =1;i<leftBannnerBox.length-1;++i){
		leftBannnerBox[i].onmouseover=function(){
		this.children[1].style.color = "#aaa";
		this.children[1].style.fontSize = "12px";
		this.children[0].style.color = "white";
		this.style.backgroundColor = "#A11";
		this.children[2].style.display = "inline-block";

	}
	leftBannnerBox[i].onmouseout=function(){
		this.children[0].style.color = "black";
		this.style.backgroundColor = "white";
		this.children[2].style.display = "none";
	}
}



