function aboutUs() {
    $("#button").click(function() {
        var data = {
            "email": $("#email").val(),
            "send_id": $("#name").val(),
            "suggestion": $("#content").val()
        }
        console.log(JSON.stringify(data));
        $.ajax({
            contentType: "application/json;charset=utf-8",
            type: 'post',
            dataType: "JSON",
            processData: false,
            url: suggestionAddUrl,
            data: JSON.stringify(data),
            success: function(result) {
                alert("提交成功");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("提交失败");
            }
        })
    })

    function bannerBox() {
        var pb = document.getElementById('pB');
        var nb = document.getElementById('nB');
        var fb = document.getElementById('fB');
        var db1 = document.getElementById('dB1');
        var db2 = document.getElementById("dB2");
        var db3 = document.getElementById("dB3");
        var ib = document.getElementById("inputBox1");
        var pj = document.getElementById("projectBox1");
        var tb = document.getElementById("titleBox1");
        if (window.innerWidth <= 1000) {
            pb.className = "pastBoxM";
            nb.className = "nowBoxM";
            fb.className = "futureBoxM";
            db1.className = "decorationBoxM";
            db2.className = "decorationBoxM";
            db3.className = "decorationBoxM";
            ib.className = "inputBoxM";
            pj.className = "projectBoxM";
            tb.className = "titleBoxM";
        }
        if (window.innerWidth > 1000) {
            pb.className = "pastBoxP";
            nb.className = "nowBoxP";
            fb.className = "futureBoxP";
            db1.className = "decorationBoxP";
            db2.className = "decorationBoxP";
            db3.className = "decorationBoxP";
            ib.className = "inputBoxP";
            pj.className = "projectBoxP"
            tb.className = "titleBoxP";
        }
    }
    bannerBox();
    window.addEventListener('resize', function() {
        bannerBox();
    })
}