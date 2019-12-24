/*
* @Author: dell
* @Date:   2019-12-23 18:48:34
* @Last Modified by:   dell
* @Last Modified time: 2019-12-23 22:37:00
*/
//评论信息储存
var comments = ["差", "一般", "中等", "还行", "好"];

//获取页面元素
var imgs = document.getElementsByClassName("star");
var text = document.getElementById("txt");
var clickPos = -1;

function show(index) {
    for (var x = (index + 1); x < imgs.length; x++) { //清空
        imgs[x].src = "pics/star0.png";
    }
    if (index < 2) { //哭脸
        for (var j = 0; j <= index; j++) {
            imgs[j].src = "pics/star1.png";
        }
    } else { //笑脸
        for (var j = 0; j <= index; j++) {
            imgs[j].src = "pics/star2.png";
        }
    }
    text.value = comments[index]? comments[index]:"";

}

for (var i = 0; i < imgs.length; i++) {
    imgs[i].index = i;
    //悬浮
    imgs[i].onmouseover = function() {
        var pos = this.index;
        show(pos);
    };

    //点击
    imgs[i].onclick = function() {
        clickPos = this.index;
        show(clickPos);
        // alert("评价成功！");
    };

    //离开
    imgs[i].onmouseout = function() {
        show(clickPos);
    };
}
