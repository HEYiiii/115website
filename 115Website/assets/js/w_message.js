// 
// var obj = [{
//     "name": "牛梓雨1",
//     "content": "我是前端狗。。。。"
// }, {
//     "name": "邓佳骏2",
//     "content": "我是前端狗。。。。。"
// }, {
//     "name": "王康力3",
//     "content": "我是全能狗。。"
// }, {
//     "name": "大宝贝4",
//     "content": "我是后端狗。。"
// }, {
//     "name": "马嘉骏5",
//     "content": "我是机器学习狗我是机器学习狗我是机器学习狗"
// }, {
//     "name": "刘致远6",
//     "content": "我是算法狗。。。。"
// }, {
//     "name": "小猫咪7",
//     "content": "你你好好呀呀。。。"
// }, {
//     "name": "小狗狗8",
//     "content": "今年不护肤，明年老阿姨"
// }, {
//     "name": "小狗狗9",
//     "content": "汪汪汪汪汪汪汪汪汪"
// }, {
//     "name": "小狗狗10",
//     "content": "易烊千玺的女孩要努力练舞"
// }, {
//     "name": "小狗狗11",
//     "content": "汪汪汪汪汪汪汪汪汪"
// }, {
//     "name": "小狗狗12",
//     "content": "每周打球30分钟"
// }, {
//     "name": "马嘉骏13",
//     "content": "我是机器学习狗我是机器学习狗我是机器学习狗"
// }, {
//     "name": "刘致远14",
//     "content": "我是算法狗。。。。"
// }, {
//     "name": "小猫咪15",
//     "content": "你你好好呀呀。。。"
// }, {
//     "name": "小狗狗16",
//     "content": "今年不护肤，明年老阿姨"
// }, {
//     "name": "小狗狗17",
//     "content": "汪汪汪汪汪汪汪汪汪"
// }, {
//     "name": "小狗狗18",
//     "content": "易烊千玺的女孩要努力练舞"
// }, {
//     "name": "小狗狗19",
//     "content": "汪汪汪汪汪汪汪汪汪"
// }, {
//     "name": "小狗狗20",
//     "content": "每周打球30分钟"
// }]
// function getArrayItems(arr, num) {
//     var copyMessage=[];
//     for (var index in arr) {
//         copyMessage.push(obj[index]);
//     }
//     var return_array = new Array();
//     for (var i = 0; i<num; i++) {
//         if (copyMessage.length>0) {
//             var arrIndex = Math.floor(Math.random()*copyMessage.length);
//             return_array[i] = copyMessage[arrIndex];
//             copyMessage.splice(arrIndex, 1);
//         } else {
//             break;
//         }
//     }
//     return return_array;
// }
// var fewMessage=getArrayItems(obj,5);

// createBox();
// 以上是实验数据



function rollBalls() {
    var tagEle = document.getElementsByClassName("tag"),
        paper = document.getElementsByClassName("tagBall")[0];
    // var tagEle = "querySelectorAll" in document ? document.querySelectorAll(".tag") : getClass("tag"),
    // paper = "querySelectorAll" in document ? document.querySelector(".tagBall") : getClass("tagBall")[0];
    RADIUS = 200,
        fallLength = 375,
        tags = [],
        angleX = Math.PI / 375,
        angleY = Math.PI / 375,
        CX = paper.offsetWidth / 2,
        CY = paper.offsetHeight / 2,
        EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
        EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;


    function innit() {
        for (var i = 0; i < tagEle.length; i++) {
            var a, b;
            var k = -1 + (2 * (i + 1) - 1) / tagEle.length;
            var a = Math.acos(k);
            var b = a * Math.sqrt(tagEle.length * Math.PI);
            var x = RADIUS * Math.sin(a) * Math.cos(b);
            var y = RADIUS * Math.sin(a) * Math.sin(b);
            var z = RADIUS * Math.cos(a);
            var t = new tag(tagEle[i], x, y, z);
            // tagEle[i].style.color = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
            tags.push(t);
            t.move();
        }
    }
    Array.prototype.forEach = function(callback) {
        for (var i = 0; i < this.length; i++) {
            callback.call(this[i]);
        }
    }

    function animate() {
        rotateX();
        rotateY();
        tags.forEach(function() {
            this.move();
        });
        requestAnimationFrame(animate);
    }
    if ("addEventListener" in window) {
        paper.addEventListener("mousemove", function(event) {
            var x = event.clientX - EX - CX;
            var y = event.clientY - EY - CY;
            angleY = x * 0.0001;
            angleX = y * 0.0001;
        });
    } else {
        paper.attachEvent("onmousemove", function(event) {
            var x = event.clientX - EX - CX;
            var y = event.clientY - EY - CY;
            angleY = x * 0.0001;
            angleX = y * 0.0001;
        });
    }

    function rotateX() {
        var cos = Math.cos(angleX);
        var sin = Math.sin(angleX);
        tags.forEach(function() {
            var y1 = this.y * cos - this.z * sin;
            var z1 = this.z * cos + this.y * sin;
            this.y = y1;
            this.z = z1;
        })
    }

    function rotateY() {
        var cos = Math.cos(angleY);
        var sin = Math.sin(angleY);
        tags.forEach(function() {
            var x1 = this.x * cos - this.z * sin;
            var z1 = this.z * cos + this.x * sin;
            this.x = x1;
            this.z = z1;
        })
    }
    var tag = function(ele, x, y, z) {
        this.ele = ele;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    tag.prototype = {
        move: function() {
            var scale = fallLength / (fallLength - this.z) / 1.5;
            var alpha = (this.z + RADIUS) / (2 * RADIUS);
            var left = this.x + CX - this.ele.offsetWidth / 2 + "px";
            var top = this.y + CY - this.ele.offsetHeight / 2 + "px";
            var transform = 'translate(' + left + ', ' + top + ') scale(' + scale + ')';
            this.ele.style.opacity = alpha + 0.5;
            this.ele.style.zIndex = parseInt(scale * 100);
            this.ele.style.transform = transform;
            this.ele.style.webkitTransform = transform;
        }
    }
    innit();
    animate();
}

function createBox(fewMessage) { //要传参
    for (var i = 0; i < fewMessage.length; i++) { //创建盒子
        let boxFather = document.getElementsByClassName("tagBall")[0];
        let box = document.createElement("a");
        let pName = document.createElement("span");
        let pContent = document.createElement("span");
        box.className = "tag";
        pName.className = "w_usename";
        pContent.className = "w_content";
        pName.innerHTML = fewMessage[i].send_id + ":" + "<br>";
        pContent.innerHTML = fewMessage[i].message;
        box.appendChild(pName);
        pName.style.color = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";

        box.appendChild(pContent);
        boxFather.appendChild(box);
    }
    rollBalls();
}

function changeBoxs() { //底下输入框的切换
    var w_inputBox1 = document.getElementsByClassName("w_inputBox1")[0];
    var w_inputBox2 = document.getElementsByClassName("w_inputBox2")[0];
    var refresh=document.getElementsByClassName("fa-refresh")[0];
    w_inputBox1.addEventListener("click", inputBox);
    var name = document.getElementById("name");
    var ppp = document.getElementById("ppp");
    console.log("yes2");

    function inputBox() {
        console.log("yes1");
        if (name.style.display == "none") {
            ppp.innerHTML = "Hi，";
            console.log("yes");

            name.style.display = "inline";
            w_inputBox1.style.display = "none";
            refresh.style.display = "none";
            w_inputBox2.style.display = "block";
        }
    }
}
changeBoxs();
$.ajax({
    type: 'get',
    dataType: "json",
    processData: false,
    url: messageGetUrl,

    success: function(result) {
        createBox(result.result);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("请求失败");
        console.log(XMLHttpRequest.status + "," + XMLHttpRequest.readyState + "," + textStatus);
    }
});
$('#ajaxBtn').click(function() {
    var Obj = {
        "send_id": document.getElementById("name").value,
        "message": document.getElementById('content').value
    }
    if (Obj.name == "" && Obj.content == "") {
        alert("内容不能为空!");
    }
    var dataObj = JSON.stringify(Obj);
    $.ajax({
        contentType: "application/json;charset=utf-8",
        type: 'post',
        dataType: "JSON",
        processData: false,
        url: messageAddUrl,
        data: dataObj,
        success: function(result) {
            alert("提交成功");
            $(".w_inputBox1")[0].style.display = "block";
            $(".fa-refresh")[0].style.display = "block";
            $(".w_inputBox2")[0].style.display = "none";
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("提交失败");
        }
    });
});