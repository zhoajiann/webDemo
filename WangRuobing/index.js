/*
* @Author: dell
* @Date:   2019-12-23 19:05:00
* @Last Modified by:   dell
* @Last Modified time: 2019-12-23 19:58:32
*/
var comments = ["差", "一般", "中等", "还行", "好"];
var imgs = document.getElementsByClassName("star");
var text = document.getElementById("txt");
var clickIndex = -1;

function show(index) {
    //清空
    for (var j = index + 1; j < imgs.length; j++) { //第一个情况
        imgs[j].src = "pics/star0.png";
    }
    if (index < 2) { //第二种情况
        for (var j = 0; j <= index; j++) {
            imgs[j].src = "picx/star1.png"; //哭脸
        }
    } else {
        for (var j = 0; j <= index; j++) { //第三种情况
            imgs[j].src = "pics/star2.png"; //笑脸
        }
    }
    text.value = comments[index] ? comments[index] : "";
}

for (var i = 0; i < imgs.length; i++) {
    imgs[i].index = i;
    imgs[i].onmouseover = function() {
        // if (this.index > clickIndex) {
        show(this.index);
        // }
    };
    imgs[i].onclick = function() {
        clickIndex = this.index;
        show(clickIndex);
    };
    imgs[i].onmouseout = function() {
        show(clickIndex);
    };
}

