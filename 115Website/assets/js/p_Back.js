function pBack() {
    var nav = document.getElementsByClassName("fa-angle-right")[0];
    // D = document.getElementsByClassName("pDirect")[0],
    // T = document.getElementsByClassName("pText")[0],
    // CR = document.getElementsByClassName("pCopyRight")[0];
    // F = document.getElementsByClassName("pFooter")[0];

    nav.addEventListener("click", StartAnimation, false);
    function StartAnimation() {
        nav.className = "fa fa-angle-right pBack";
        // D.className = "pDirect pDBack";
        // T.className = "pText pTBack";
        // CR.className = "pCopyRight pCRBack";
        // F.className = "pFooter pFBack";
        setTimeout(function () {
            document.getElementById("pNavbar").style.display='none';
            window.location = "w_navbar.html";
            nav.className = "fa fa-angle-right";

            // D.className = "pDirect";
            // T.className = "pText";
            // F.className = "pFooter";
            // CR.className = "pCopyRight";
        }, 1000)
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
        }, 1000)
    }
}