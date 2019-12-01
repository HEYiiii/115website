function pBack() {
    var nav = document.getElementsByClassName("fa-angle-right")[0];
    nav.addEventListener("click", StartAnimation, false);
    function StartAnimation() {
        nav.className = "fa fa-angle-right pBack";
        setTimeout(function () {
            document.getElementById("pNavbar").style.display='none';
            window.location = "w_navbar.html";
            nav.className = "fa fa-angle-right";
        }, 800)
    }
}

function back() {//关闭导航
    var nav = document.getElementsByClassName("fa-angle-left")[0];
    nav.addEventListener("click", StartAnimation, false);
    function StartAnimation() {
        nav.className = "fa fa-angle-left back";
        setTimeout(function () {
            document.getElementById("w_navbar").style.display='none';
            window.history.go(-1);
            nav.className = "fa fa-angle-left";
        }, 800)
    }
}