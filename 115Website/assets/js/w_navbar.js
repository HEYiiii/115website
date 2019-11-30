function back(){//关闭导航
    var nav=document.getElementsByClassName("fa-angle-left")[0];
    nav.addEventListener("click",StartAnimation,false);
    function StartAnimation()
    {
        nav.className="fa fa-angle-left back";
        setTimeout(function(){
        document.getElementById("w_navbar").style.display='none';
        // document.getElementById("w_navbar").style.zIndex='-999';
        document.getElementById("w_emmmm").style.display='block';
        document.body.style.backgroundColor="white";
        nav.className="fa fa-angle-left";
        },1000)
    }
}
function out(){//打开导航
    var nav=document.getElementsByClassName("fa-angle-right")[0];
    nav.addEventListener("click",StartAnimation,false);//添加触摸事件
    //开始动画
    function StartAnimation()
    {
        nav.className="fa fa-angle-right open";//添加open类
        setTimeout(function(){
        document.getElementById("w_navbar").style.display='block';
        document.getElementById("w_emmmm").style.display='none';
        document.body.style.backgroundColor="#223A4D";
        nav.className="fa fa-angle-right";
        },1000)//延迟关闭动画 移除open类
    }
}

// function back(){//关闭导航
//     var nav=document.getElementsByClassName("fa-angle-left")[0];
//     nav.addEventListener("click",StartAnimation,false);
//     function StartAnimation()
//     {
//         nav.className="fa fa-angle-left back";
//         setTimeout(function(){
//         document.getElementById("w_navbar").style.display='none';
//         document.getElementById("w_navbar").style.zIndex='-999';
//         // document.getElementById("w_emmmm").style.display='block';
//         document.body.style.backgroundColor="white";
//         nav.className="fa fa-angle-left";
//         },1000)
//     }
// }
// function out(){//打开导航
//     var nav=document.getElementsByClassName("fa-angle-right")[0];
//     nav.addEventListener("click",StartAnimation,false);//添加触摸事件
//     //开始动画
//     function StartAnimation()
//     {
//         nav.className="fa fa-angle-right open";//添加open类
//         setTimeout(function(){
//         document.getElementById("w_navbar").style.display='block';
//         document.getElementById("w_emmmm").style.display='none';
//         document.body.style.backgroundColor="#223A4D";
//         nav.className="fa fa-angle-right";
//         },1000)//延迟关闭动画 移除open类
//     }
// }